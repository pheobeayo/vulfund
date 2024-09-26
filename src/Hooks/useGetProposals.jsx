import { useCallback, useEffect, useState } from "react";
import { readOnlyProvider } from "../constants/providers";
import { getVulfundContract } from "../constants/contract";
import { wssProvider } from "../constants/providers";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import { ethers } from "ethers";

const useGetProposals = () => {
    const [allProposals, setAllProposals] = useState([]);
    const [count, setCount] = useState(0);
    const { address } = useWeb3ModalAccount()

    const convertIpfsUrl = (url) => {
        if (url.startsWith("ipfs://")) {
            return url.replace("ipfs://", "https://ipfs.io/ipfs/");
        }
        return url;
    };

    const fetchAllProposals = useCallback(async () => {
        try {
            const contract = getVulfundContract(readOnlyProvider);
            const res = await contract.orgProfiles(address);
            // const converted = res?.map((item, index)=>{
            //     return{
            //   }      
            // }) 
            setAllProposals(res)
        } catch (error) {
            console.error(error);
        }
    }, []);

    const trackingProposals = useCallback(() => {
        setCount((prevValue) => prevValue + 1);
        fetchAllProposals();
    }, [fetchAllProposals]);


    useEffect(() => {
        fetchAllProposals();

        const filter = {
            address: import.meta.env.VITE_CONTRACT_ADDRESS ,
            topics: [ethers.id("ProposalCreated(uint,address,string,address,uint)")],
        };

        wssProvider.getLogs({ ...filter, fromBlock: 12360578 }).then((events) => {
            setCount(events.length + 1);
        });

        const provider = new ethers.WebSocketProvider(
            import.meta.env.VITE_WSS_AMOY_RPC
        );
        provider.on(filter, trackingProposals);

        return () => {
            // Perform cleanup
            provider.off(filter, trackingProposals);
        };

    }, [fetchAllProposals, trackingProposals, count]);

    return allProposals;
}

export default useGetProposals;