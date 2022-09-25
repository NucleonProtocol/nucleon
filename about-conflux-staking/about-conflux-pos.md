# About Conflux PoS

Through CIP-43 Hydra has introduced a PoS system to improve the finality of the whole Network. CFX holders can stake their CFX to PoS to protect high-value transactions and also earn CFX rewards of participating the PoS. There might be a 51% attack problem in the early stage of a PoW chain when the hashing power is low. This became an even more significant issue when hashpower rental platforms emerged along with the development of public blockchains. Ethereum Classic, Grin, and Verge have all been the victims of the 51% attack last year.

To deal with the threats caused by 51% attacks, Conflux will introduce a stand-alone PoS chain. The consensus participants of the PoS chain will sign the pivot of the tree structure regularly. All PoW miners should select the pivot with enough signatures into the pivot chain, even if its sibling blocks have higher weights. Briefly speaking, the PoS chain specifies a pivot block, and all PoW miners should follow that block.

This means as long as the PoS consensus votes to a pivot block, even if the 51% attackers try to reverse the block, it won’t be recognized by the PoW nodes.

Conflux requires the PoS consensus to use the power of specifying pivot blocks in a restrictive manner. A block must be confirmed for a few minutes under the PoW rules before the honest PoS nodes will sign it. This means that the block sorting and confirmation of the tree graph are still accomplished by the PoW miners.

The PoS chain is only used to deal with 51% of attacks. Therefore, it only includes basic features such as pivot block voting and voting committee election. It does not include the functionalities of general blockchains such as transactions and contract eNucleoncutions.

The PoS chain features are built-in functionalities in the nodes of Conflux. Externally, there is still only one program: conflux-rust.

In this document, the Conflux chain refers to the running blockchain, and the PoS chain refers to the newly introduced chain.

There is approximately 1 PoS block generated per minute. All the times stated below are corresponding to the number of blocks.



{% embed url="https://developer.confluxnetwork.org/v2-hardfork/pos_faqs/" %}
