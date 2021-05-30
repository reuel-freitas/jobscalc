module.exports = {
    remainingDays(job) {
        const remainingDays = (job["total-hours"] / job["daily-hours"]).toFixed()

        const createDate = new Date(job.created_at)//Job created Date
        const dueDay = createDate.getDate() + Number(remainingDays)// calculation 
        const dueDateInMs = createDate.setDate(dueDay)

        const timeDiffInMs = dueDateInMs - Date.now()

        // ms in days
        const dayInMs = 1000 * 60 * 60 * 24
        const dayDiff = Math.ceil(timeDiffInMs / dayInMs)

        return dayDiff
    },
    calculateBudget: (job, valueHour) => valueHour * job["total-hours"]
}