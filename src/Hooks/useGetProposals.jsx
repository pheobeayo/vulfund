// src/Hooks/useGetProposals.js

import { useEffect, useState } from "react";
import { readOnlyProvider } from "../constants/providers";
import { getVulfundContract } from "../constants/contract";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import { formatUnits } from "ethers";

const useGetProposals = () => {
  const [allProposals, setAllProposals] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { address } = useWeb3ModalAccount(); // Get user address

  useEffect(() => {
    const fetchEvents = async () => {
      if (!address) {
        console.log("No address available. Skipping fetchEvents.");
        setLoading(false);
        return;
      }

      try {
        const contract = getVulfundContract(readOnlyProvider);
        const deploymentBlockNumber = 12360578; // Replace with your contract's deployment block

        const filter = contract.filters.ProposalCreated();
        const events = await contract.queryFilter(
          filter,
          deploymentBlockNumber,
          "latest"
        );

        const convertedProposals = events.map((event) => {
          const { args } = event;
          return {
            id: Number(args[0]), 
            beneficiary: args[1],
            description: args[2],
            recipient: args[3],
            amount: formatUnits(args[4], 18), 
          };
        });

        setAllProposals(convertedProposals);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching proposals:", err);
        setError(err);
        setAllProposals([]); // Reset to empty array on error
        setLoading(false);
      }
    };

    fetchEvents();
  }, [address]); // Re-run when address changes

  return { allProposals, loading, error };
};

export default useGetProposals;
