# Berlin Agents Hackathon MVP

## Goal

Build a localhost MVP integrating:

* Circle (USDC payments)
* OOBE Identity (agent identity)
* OOBE SAP (agent escrow + settlement)
* Nebius TokenFactory (inference)
* Tavily (research)

## User Flow

1. User enters a query.
2. User pays testnet USDC using Circle.
3. Funds are deposited into OOBE SAP escrow.
4. SAP dispatches task to a registered OOBE agent.
5. Agent identity is verified through OOBE.
6. Agent uses TokenFactory to understand the request.
7. Agent uses Tavily to perform research.
8. Agent generates a final answer.
9. Agent reports usage/cost to SAP.
10. SAP settles payment.
11. Agent receives fee.
12. Remaining USDC is refunded to the user.
13. User receives result and can verify which agent performed the work.

## Starting Environment

* macOS
* Empty folder
* No Solana tooling installed
* No wallet created
* No OOBE account
* No Circle account

## Tasks

### Setup

1. Install Node.js.
2. Install Solana CLI.
3. Create Solana devnet wallet.
4. Fund wallet via devnet airdrop.
5. Create Circle developer account.
6. Obtain Circle API credentials.
7. Obtain Tavily API key.
8. Obtain Nebius TokenFactory API key.

### OOBE Identity

9. Install OOBE Identity SDK.
10. Create agent identity.
11. Register agent identity.
12. Verify agent identity on OOBE.

### OOBE SAP

13. Install SAP SDK.
14. Connect SAP to agent identity.
15. Register agent capabilities.
16. Enable SAP task handling.
17. Enable SAP escrow and settlement.

### Backend

18. Create Node.js + TypeScript project.
19. Configure Circle SDK.
20. Configure OOBE Identity SDK.
21. Configure SAP SDK.
22. Configure TokenFactory client.
23. Configure Tavily client.
24. Implement agent runtime.
25. Receive SAP tasks.
26. Run TokenFactory inference.
27. Run Tavily research.
28. Generate final answer.
29. Report cost and completion to SAP.

### Payments

30. User pays USDC through Circle.
31. Funds enter SAP escrow.
32. SAP pays agent.
33. SAP refunds unused balance.

### Frontend

34. Connect wallet.
35. Enter query.
36. Pay USDC.
37. View task status.
38. View agent identity.
39. View final result.

## Success Criteria

User Query → Circle Payment → SAP Escrow → OOBE Identity → OOBE Agent → TokenFactory 
→ Tavily → Result → SAP Settlement → Refund

