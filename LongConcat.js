npm install --save-dev typescript
#include <iostream>
#include <fstream>
#include <string>
#include <list>
#include <map>
#include <set>
#include <iterator>

class Solution {
    public List<String> words(String[] words) //used to call result 
    {
        List<String> res = new ArrayList<>(); //set the string
        Set<String> set = new HashSet<>(); //set new hashset
        for (String s : words) //set string to words 
        {
            set.add(s);
        }
        for (String s: words) {
            set.remove(s);
            
            if (canBreak(s, set)) {
                res.add(s);
            }
            
            set.add(s); //adds words to the set
        }
        
        return res;
        
    }
    
    private boolean canBreak(String s, Set<String> set) 
    {
        if (set.size() == 0) return false; 
        int n = s.length(); 
        if (n == 0) return false;
        boolean[] dp = new boolean[n + 1];
        dp[0] = true;
        
        for (int i = 1; i <= n; i++) {
            for (int j = 0; j < i; j++) {
                if (!dp[j]) continue;
            if (set.contains(s.substring(j, i)))  {
                dp[i] = true; //sets new i value to continue adding words
                break;
            }
        }
     }
    return dp[n];
}
}
