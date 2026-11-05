class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const count: Map<number, number> = new Map()
        const bucket: number[][] = Array.from({length: nums.length + 1}, () => [])
        for (const n of nums) {
            count.set(n, (count.get(n) ?? 0) + 1);
        }
        for (const [n,c] of count) {
            bucket[c].push(n)
        }
        const res = [];
        for (let i = bucket.length - 1; i > 0; i--) {
            for (const n of bucket[i]){
                res.push(n);
                if (res.length === k) return res
            }
        }
    }
}
