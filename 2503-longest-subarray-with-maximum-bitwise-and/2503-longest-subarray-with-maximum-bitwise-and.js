const longestSubarray = nums => {
	const maxVal = Math.max(...nums)
	let maxStreak = 0,
		streak = 0
	for (let i = 0; i < nums.length; i++) {
		nums[i] === maxVal
			? (streak++, streak > maxStreak && (maxStreak = streak))
			: streak = 0
	}
	return maxStreak
}