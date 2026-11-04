class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const freq: Map<number, number> = new Map();
        for (const n of nums){
            freq.set(n, (freq.get(n) ?? 0) + 1)
        }
        const array = Array.from(freq.entries()).sort((a, b) => b[1] - a[1])
        return array.slice(0, k).map((n) => n[0])
    }
        
}
