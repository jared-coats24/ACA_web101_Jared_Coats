/* FizzBuzz is a right-of-passage in the software development world. It's like the "Hello World" of programming. It goes like this:
List all numbers between 1 - 1000.
Instead of printing the numbers that are evenly divisible by 3, print "fizz".
Instead of printing the numbers that are evenly divisible by 5, print "buzz".
If the number is evenly divisible by both 3 and 5, print "fizzBuzz".
If none of the above, print the number.
You'll need a few things from your past pre-lessons:
% modulus
while loop
++ incrementor
And something you haven't covered in depth yet: if(){} if else(){} else {} */


const countOneToThousand = () => {
   
   for (let counter = 1; counter <= 1000; counter++){
    // while (counter <= 1000){     
        
        if ((counter % 3 == 0) && (counter % 5 == 0)) {
            //evenly divisible by 3, print "fizzbuzz".
            console.log('FizzBuzz');
        } else if (counter % 5 == 0) {
            //evenly divisible by 5, print "buzz".
            console.log('Buzz');
        } else if (counter % 3 == 0){
            //evenly divisible by 3, print "fizz".
            console.log('Fizz');
        } else {
            console.log(counter);
        }
       
        //counter ++;
    }
}
