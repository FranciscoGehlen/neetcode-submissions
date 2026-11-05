class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        const sizes: string[] = [], parts: string[] = [];
        for (const str of strs) {
            sizes.push(String(str.length))
            parts.push(str)
        }
        sizes.push('#')
        return sizes.join(',') + parts.join("");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let i = 0;
        const sizes: number[] = [], res: string[] = [];
        while (str[i] !== '#') {
            let j = i;
            while (str[j] !== ','){
                j++;
            }
            sizes.push(parseInt(str.substring(i,j), 10))
            i = j + 1;
        }
        i++
        for (let size of sizes){
            res.push(str.substring(i, i+size))
            i += size;
        }
        return res
    }
}
