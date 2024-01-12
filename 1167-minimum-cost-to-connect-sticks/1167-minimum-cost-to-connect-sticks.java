class Solution {
    public int connectSticks(int[] sticks) {
        /** [3,10,11,12,16]
             3,10          [13,11,12,16]
                  11,12    [13,23,16]
             3,10,     ,16 [23,29]
             3,10,11,12,16 [52]
            //  3*(3+10)+2*(11+12+16)
             13+(11+12)+(13+16)+(23+29) = 117
         */
        // https://www.geeksforgeeks.org/priorityqueue-remove-method-in-java/
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        int totalCost = 0; 

        for (int stick : sticks) {
            pq.add(stick);
        }
        
        while (pq.size() > 1) {
            int cost = pq.remove() + pq.remove();
            pq.add(cost);
            totalCost += cost;
        }

        return totalCost;

    }
}