class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const results: Map<string, string[]> = new Map();
        for (const s of strs) {
            const count = new Array(26).fill(0);
            for (let c of s) {
                count[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            }
            const key = count.join(',');
            if (!results.get(key)) {
                results.set(key,[])
            }
            results.get(key)!.push(s)
        }
        return Array.from(results.values())
    }

}
