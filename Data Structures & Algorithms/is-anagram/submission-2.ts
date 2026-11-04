class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;
        const sMap: Map<string, number> = new Map();
        const tMap: Map<string, number> = new Map();
        for (const letter of s) {
            sMap.set(letter, (sMap.get(letter) ?? 0) + 1)
        }
        for (const letter of t) {
            tMap.set(letter, (tMap.get(letter) ?? 0) + 1)
        }
        for (const [letter, count] of sMap) {
            if (count !== tMap.get(letter)) return false
        }
        return true
    }
}
