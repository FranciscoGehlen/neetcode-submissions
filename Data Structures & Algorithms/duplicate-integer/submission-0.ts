class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        var hash: Set<number> = new Set();
        for (const num of nums) {
            if (hash.has(num)) {
                return true
            }
            hash.add(num)
        }
        return false
    }
}
