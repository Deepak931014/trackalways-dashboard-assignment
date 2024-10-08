const DashboardStats = () => {
    const stats = [
        {label: 'Total Employees', value: 90, icon: 'icon path'},
        {label: 'Total Departments', value: 18, icon: 'icon path'},
        {label: 'Total Holidays', value: 3, icon: 'icon path'},
        {label: 'Paid Leaves', value: 60, icon: 'icon path'},
        {label: 'On Leave Today', value: 0, icon: 'icon path'},
        {label: 'Pending Leave Requests', value: 0, icon: 'icon path'},
        {label: 'Total Check in today', value: 0, icon: 'icon path'},
        {label: 'Total Check out today', value: 0, icon: 'icon path'},
    ]
    return(
        <div className="grid grid-cols-4 gap-6 p-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-4 rounded-md shadow-md">
                <div className="flex items-center space-x-2">
                    <img src={stat.icon} alt={stat.label} />
                    <h3 className="text-xl font-semibold">{stat.label}</h3>
                </div>
                <p className="text-3xl mt-2">{stat.value}</p>
              </div>
            ))}
        </div>
    );
};
export default DashboardStats;