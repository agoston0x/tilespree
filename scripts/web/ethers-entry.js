// Browser bundle entry: expose ethers as a global for the passkey wallet page.
import { ethers } from "ethers";
window.ethers = ethers;
