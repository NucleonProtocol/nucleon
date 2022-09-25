# Economics Detail

### Two Tokens: xCFX and NUT &#x20;

Nucleon has a two token model, including xCFX, and NUT. &#x20;

* xCFX is the interest-bearing ERC20 token that represents CFX staked into Nucleon’s PoS pool and it’s interest accrued in CFX over time.
* NUT is Nucleon’s governance token, which can be used of X-DAO for governance decisions & to manage risk factors

### xCFX Token Model

* A user mints xCFX by staking CFX into Nucleon’s PoS Pool.
* xCFX is pegged 1:1 with CFX in at network launch, but moving forward, each xCFX will include the basic value of staked CFX plus the interest accrued through Conflux’s PoS mechanism through xCFX’s pricing mechanism.
* After a user mints xCFX ,via staking CFX into Nucleon’s PoS Pool, the amount of xCFX will never change, but will increase in value, as the CFX interest earned via PoS is mapped into xCFX over time via an automatic compounding process.
* When users stake CFX for xCFX after the project is live and PoS interest has been obtained, the protocol will automatically query the total CFX quantity (staked CFX and interest earned CFX) to determine the value of CFX to xCFX, thus, how much CFX the user needs to stake to obtain 1 xCFX.
* Beyond earning interest xCFX will develop use cases across Conflux eSpace ecosystem including:
  * Swappi: leading decentralized exchange on Conflux eSpace,Swap,LPs, and farming.
  * Triangle Exchange: Stable Swap & AMM Protocol with extremely low slippage.
  * Goldeo: Lending and borrowing.

The following figure is the **Platform Operation Flow Chart** at launch:

* User stake CFX in Nucleon.
* Nucleon stakes the CFX into PoS Pool.
* Nucleon sends user xCFX on a 1:1 xCFX to CFX basis at launch (when users exchange CFX for xCFX after launch, the pool will automatically query the total CFX quantity corresponding to xCFX in the pool).
* 10% of PoS interests is transferred to the Service Vault, of which 50% belongs to treasury and the remaining 50% belongs to NUT stakers.
* The service fee deducted from the interest earned is auto compounded and converted into xCFX (no increase in xCFX value since the service fee is used to mint new xCFX).
* 90% of PoS interests transfer to the Staker Vault.
* Interest accrued through the Staker Vault is auto-compounded to increase the xCFX value.

When users withdraw xCFX to CFX, they will conduct a lossless exchange according to the CFX to xCFX value at the moment of withdrawal. The xCFX to CFX withdraw value is determined the moment the withdrawal operation is confirmed. There is a withdrawal time, which is determined by the POS mechanism - currently: 14 days.

The following figure shows the **Process of Withdrawing xCFX to CFX:**

1. Users returns xCFX to Nucleon**.**
2. Nucleon burns xCFX.
3. Nucleon withdraw originally staked CFX and corresponding interest according to the xCFX:CFX value.
4. After 14 days delay, user can withdraw their initially staked CFX and the accrued interest over time in CFX.

### xCFX Design Features

* Simple calculation for the rate of return of CFX to users:

$$
(interest / total CFX staked) / (query time - start time)
$$

* No complicated and continuous monitoring of user information; any operation can be completed according to the number of xCFX, reducing the complexity of the protocol’s smart contracts.
* xCFX is a standard ERC-20 token, which is composable in DeFi.
* The price ratio between xCFX and CFX is not constant, which may increase the learning curve of xCFX in the community.
* xCFX is increasing value all the time, so arbitrage opportunities will continue to occur on exchange tools, and the convertible CFX on lending tools should also continue to increase.

### xCFX value-increasing model

The compound interest appreciation of xCFX is calculated at 15% simple interest, and the appreciation curve of xCFX is shown in the figure below (x-axis: days; y-axis: 10,000 xCFX value in CFX):

The annualized compound interest is about 15.67%, which is 0.67 percentage points higher than the 15% used in the calculation.

If the loan platform is used, the leverage ratio can reach 3 times when the lending rate is 70%; The annualized amount is about 15.67% \*3- borrowing costs =47.01% - borrowing costs; If users feel profitable, it will greatly improve the POS staking rate of CFX; The specific profit margin of each lending proportion is shown in the following table:

|        Lending rate         |          50%           |          60%           |           70%           |           80%           |            90%            |
| :-------------------------: | :--------------------: | :--------------------: | :---------------------: | :---------------------: | :-----------------------: |
| XCFX to CFX principal ratio |          1.998         |          2.485         |          3.239          |          4.463          |           6.513           |
|  Annualized profit margin%: | 31.3 - borrowing costs | 38.94 - borrowing cost | 50.76 - borrowing costs | 69.94 - borrowing costs | 102.058 - borrowing costs |

### xCFX Examples

In Table 1, we assume the interests of the PoS pool Nucleon uses has a constant interest rate of 16% per year, and the calculation does not consider the impact of the 1000 CFX limitation for the PoS pool.

* On day 0, user A stakes 10000 CFX in the pool and receives 10000 xCFX from the protocol.
* After 6 days, the 10000 xCFX are valued at 10023.69719\* CFX.
* The Service Vault earned 2.629 xCFX\*\*.

### Table 1：

| Day  | CFX in pool  | Daily auto-compound    \[CFX]  | Service Vault daily fee   \[CFX]    | 10000 xCFX value in CFX   \[CFX]  | Total xCFX minted   \[xCFX]  | Service Vault earnings \[xCFX]  | xCFX accrued daily   \[xCFX]  |
| :--: | :----------: | :----------------------------: | :---------------------------------: | :-------------------------------: | :--------------------------: | :-----------------------------: | :---------------------------: |
|   0  |     10000    |                0               |                  0                  |               10000               |             10000            |                0                |               0               |
|   1  |  10004.38356 |            3.945205            |               0.438356              |            10003.94521            |          10000.4382          |             0.438164            |           0.4381641           |
|   2  |  10008.76904 |            3.946935            |               0.438548              |            10007.89214            |          10000.8763          |             0.876328            |           0.4381641           |
|   3  |  10013.15645 |            3.948665            |               0.438741              |   <p>10011.84081 </p><p>*** </p>  |          10001.3145          |             1.314492            |           0.4381641           |
|   4  |  10017.54578 |            3.950396            |               0.438933              |             10015.7912            |          10001.7527          |             1.752656            |           0.4381641           |
|   5  |  10021.93703 |            3.952128            |               0.439125              |            10019.74333            |          10002.1908          |             2.19082             |           0.4381641           |
|   6  |  10026.33021 |             3.95386            |               0.439318              |    <p>10023.69719 </p><p>* </p>   |           10002.629          |    <p>2.628985 </p><p>** </p>   |           0.4381641           |

If user B stakes 10000 xCFX on day 3, they need to stake 10011.84081\*\*\* CFX; and after user B stakes the necessary amount, the table will change to:

### Table 2：

|       Day        | CFX in pool  | Daily auto-compound    \[CFX]  | Service Vault daily fee   \[CFX]    | 10000 xCFX value in CFX   \[CFX]  | Total xCFX minted   \[xCFX]  | Service Vault earnings \[xCFX]  | xCFX accrued daily   \[xCFX]  |
| :--------------: | :----------: | :----------------------------: | :---------------------------------: | :-------------------------------: | :--------------------------: | :-----------------------------: | :---------------------------: |
|   3 (pre-stake)  |  10013.15645 |            3.948665            |               0.438741              |   <p>10011.84081 </p><p>*** </p>  |          10001.3145          |             1.314492            |           0.4381641           |
| 3 (after- stake) |  20024.99726 |            3.948665            |               0.438741              |            10011.84081            |          20001.3145          |             1.314492            |           0.4381641           |
|         4        |  20033.77534 |            7.900273            |               0.877808              |            10015.79053            |          20002.1908          |             2.19083             |           0.8763282           |
|         5        |  20042.55727 |            7.903736            |               0.878193              |            10019.74203            |          20003.0671          |             3.06716             |           0.8763282           |
|         6        |  20051.34305 |            7.907201            |               0.878578              |  <p>10023.69511 </p><p>**** </p>  |          20003.9434          |             3.94348             |           0.8763282           |

* If user B unstakes 10000 xCFX on day 6, they would be able to claim 10023.69511 CFX\*\*\*\*.
* If user A unstakes 10000 xCFX on day 6, they will also be able to claim 10023.69511 CFX.
* The xCFX will be burned immediately after the unstake operation is completed, and the CFX amount needed to return is calculated simultaneously.
* After the withdrawal time, the user can claim the originally claimed CFX and accrued interest.

### Nucleon asset increase calculations:

We assume the interests of the PoS pool Nucleon uses has a constant interest rate of 16% per year, and the calculation does not consider the impact of the 1000 CFX limitation for the PoS pool.

### Table 3:

| Day  | Total CFX (staked + interest)   \[CFX]  | Daily interests - Users - 90%   \[CFX]  | Daily interests - Treasury - 10%   \[CFX]  | 10000 xCFX value   \[CFX]  | Treasury holdings   \[CFX]  | Total xCFX amount   \[xCFX]  | Daily treasury holdings increase   \[xCFX]  | xCFX value   \[CFX]  |
| :--: | :-------------------------------------: | :-------------------------------------: | :----------------------------------------: | :------------------------: | :-------------------------: | :--------------------------: | :-----------------------------------------: | :------------------: |
|   1  |                10000.000                |                                         |                                            |          10000.000         |            0.000            |           10000.000          |                                             |                      |
|   2  |                10004.384                |                  3.945                  |                    0.438                   |          10003.945         |            0.438            |           10000.438          |                    0.438                    |         1.000        |
|   3  |                10008.769                |                  3.947                  |                    0.439                   |          10007.892         |            0.876            |           10000.876          |                    0.438                    |         1.000        |
|   4  |                10013.156                |                  3.949                  |                    0.439                   |          10011.841         |            1.314            |           10001.314          |                    0.438                    |         1.000        |
|   5  |                10017.546                |                  3.950                  |                    0.439                   |          10015.791         |            1.753            |           10001.753          |                    0.438                    |         1.000        |
|   6  |                10021.937                |                  3.952                  |                    0.439                   |          10019.743         |            2.191            |           10002.191          |                    0.438                    |         1.000        |
|   7  |                10026.330                |                  3.954                  |                    0.439                   |          10023.697         |            2.629            |           10002.629          |                    0.438                    |         1.000        |
|   8  |                10030.725                |                  3.956                  |                    0.440                   |          10027.653         |            3.067            |           10003.067          |                    0.438                    |         1.000        |
|   9  |                10035.122                |                  3.957                  |                    0.440                   |          10031.610         |            3.505            |           10003.505          |                    0.438                    |         1.000        |
|  100 |                10443.428                |                  4.118                  |                    0.458                   |          10399.085         |            43.378           |           10043.378          |                    0.438                    |         1.004        |
|  101 |                10448.006                |                  4.120                  |                    0.458                   |          10403.205         |            43.816           |           10043.816          |                    0.438                    |         1.004        |
|  102 |                10452.586                |                  4.122                  |                    0.458                   |          10407.327         |            44.255           |           10044.255          |                    0.438                    |         1.004        |
|  103 |                10457.167                |                  4.124                  |                    0.458                   |          10411.451         |            44.693           |           10044.693          |                    0.438                    |         1.004        |
|  104 |                10461.751                |                  4.126                  |                    0.458                   |          10415.576         |            45.131           |           10045.131          |                    0.438                    |         1.005        |
|  105 |                10466.337                |                  4.127                  |                    0.459                   |          10419.704         |            45.569           |           10045.569          |                    0.438                    |         1.005        |
|  106 |                10470.925                |                  4.129                  |                    0.459                   |          10423.833         |            46.007           |           10046.007          |                    0.438                    |         1.005        |
|  107 |                10475.515                |                  4.131                  |                    0.459                   |          10427.964         |            46.445           |           10046.445          |                    0.438                    |         1.005        |
|  108 |                10480.107                |                  4.133                  |                    0.459                   |          10432.097         |            46.884           |           10046.884          |                    0.438                    |         1.005        |
|  109 |                10484.701                |                  4.135                  |                    0.459                   |          10436.231         |            47.322           |           10047.322          |                    0.438                    |         1.005        |
|  200 |                10911.299                |                  4.303                  |                    0.478                   |          10820.169         |            87.195           |           10087.195          |                    0.438                    |         1.009        |
|  201 |                10916.082                |                  4.305                  |                    0.478                   |          10824.474         |            87.633           |           10087.633          |                    0.438                    |         1.009        |
|  202 |                10920.867                |                  4.307                  |                    0.479                   |          10828.780         |            88.071           |           10088.071          |                    0.438                    |         1.009        |
|  203 |                10925.654                |                  4.309                  |                    0.479                   |          10833.089         |            88.509           |           10088.509          |                    0.438                    |         1.009        |
|  204 |                10930.444                |                  4.310                  |                    0.479                   |          10837.399         |            88.947           |           10088.947          |                    0.438                    |         1.009        |
|  205 |                10935.235                |                  4.312                  |                    0.479                   |          10841.712         |            89.385           |           10089.385          |                    0.438                    |         1.009        |
|  206 |                10940.029                |                  4.314                  |                    0.479                   |          10846.026         |            89.824           |           10089.824          |                    0.438                    |         1.009        |
|  207 |                10944.824                |                  4.316                  |                    0.480                   |          10850.342         |            90.262           |           10090.262          |                    0.438                    |         1.009        |
|  208 |                10949.622                |                  4.318                  |                    0.480                   |          10854.660         |            90.700           |           10090.700          |                    0.438                    |         1.009        |
|  209 |                10954.422                |                  4.320                  |                    0.480                   |          10858.980         |            91.138           |           10091.138          |                    0.438                    |         1.009        |
|  359 |                11698.753                |                  4.613                  |                    0.513                   |          11528.877         |           156.863           |           10156.863          |                    0.438                    |         1.009        |
|  360 |                11703.881                |                  4.615                  |                    0.513                   |          11533.493         |           157.301           |           10157.301          |                    0.438                    |         1.016        |
|  361 |                11709.011                |                  4.617                  |                    0.513                   |          11538.110         |           157.739           |           10157.739          |                    0.438                    |         1.016        |
|  362 |                11714.144                |                  4.619                  |                    0.513                   |          11542.730         |           158.177           |           10158.177          |                    0.438                    |         1.016        |
|  363 |                11719.279                |                  4.621                  |                    0.513                   |          11547.351         |           158.615           |           10158.615          |                    0.438                    |         1.016        |
|  364 |                11724.416                |                  4.623                  |                    0.514                   |          11551.975         |           159.054           |           10159.054          |                    0.438                    |         1.016        |
|  365 |                11729.556                |                  4.626                  |                    0.514                   |          11556.600         |           159.492           |           10159.492          |                    0.438                    |         1.016        |

