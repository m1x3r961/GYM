
  
export default function BalanceStats({
    theterBalance,
    gymBalance,
    stakingBalance
}) {
return (
    <div>
    <h3 className="text-lg leading-6 font-medium text-gray-900">Gymcoin - DeFi Staking Protocol</h3>
    <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        
        <div  className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">USDT Balance</dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900">{theterBalance.toLocaleString()}</dd>
        </div>
        <div  className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">GYM Balance</dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900">{gymBalance}</dd>
        </div>
        <div  className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">Staking Balance</dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900">{stakingBalance.toLocaleString()}</dd>
        </div>
        
    </dl>
    </div>
)
}