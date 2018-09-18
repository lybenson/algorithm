#include <vector>
using std::vector;
#include <unordered_map>
using std::unordered_map;

class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target)   
    {
        unordered_map<int, int> d;
        vector<int> ret;
        for (size_t i = 0; i < nums.size(); ++i)
        {
            if (d.find(nums[i]) == d.end())
            {
                d[target-nums[i]] = i;
            }
            else
            {
                ret.push_back(d[nums[i]]);
                ret.push_back(i);
                break;
            }
        }
        return ret;
    }
};
