#include <vector>
using std::vector;
#include <iostream>
#include <unordered_map>
using std::unordered_map;
using namespace std;

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

int main() {
  Solution s;
  int arr[5] = {1, 2, 3, 4, 5};
  vector<int> nums(arr, arr + 5);
  vector<int> res = s.twoSum(nums, 6);
  for (int i = 0; i < res.size(); i++)
    cout<<res.at(i)<<endl;
  return 0;
}
