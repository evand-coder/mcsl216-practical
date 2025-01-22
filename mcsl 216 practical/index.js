let prices = [15, 5, 20, 8, 7];
let weight = [3, 4, 6, 8, 2];
let Cap = 20;

class Product {
    constructor(price, weight) {
        this.price = price;
        this.weight = weight;
        this.perkgPrice = price / weight;
    }
}

function Fractionalknapsack(Products, Cap) {
    let sorted = Products.sort((a, b) => b.perkgPrice - a.perkgPrice); // Sort by per kg price
    let totalProfit = 0;
    let currentWeight = 0;

    for (let item of sorted) {
        if ((currentWeight + item.weight) <= Cap) {
            currentWeight += item.weight;
            totalProfit += item.price;
        } else {
            let remainingWeight = Cap - currentWeight;
            totalProfit += item.price * (remainingWeight / item.weight);
            break; // After taking fractional part, exit the loop
        }
    }

    return totalProfit; // Return the total profit
}

let Products = [];

for (let i = 0; i < prices.length; i++) {
    Products.push(new Product(prices[i], weight[i]));
}

let op_sol = Fractionalknapsack(Products, Cap);
console.log(op_sol);



// Merge Sort
function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
  
    return merge(mergeSort(left), mergeSort(right));
  }
  
  function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }
  
  // Example usage
  const unsortedArray = [38, 27, 43, 3, 9, 82, 10];
  const sortedArray = mergeSort(unsortedArray);
  
  console.log("Unsorted Array:", unsortedArray);
  console.log("Sorted Array:", sortedArray);

  //Design a form for booking room through a Hotel website
  //index.html
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Student Satisfaction Survey</h1>
    <form action="/ignou/submit.php" method="post" onsubmit="return validation()">
        <label>Name</label><br/>
        <input type="text" name="name" placeholder="name" id="name" /><br/>
        <label>Email</label><br/>
        <input type="email" name="email" placeholder="email" id="email" /><br/>
        <label>Phone number</label><br/>
        <input type="number" name="phone_number" placeholder="phone number" id="phone_number" /><br/><br/>
        <input type="submit"  name="submit" id="submit" value="submit" />
        <input type="reset" name="reset" id="reset" value="reset" />
    </form>

    <script>
      let name=document.getElementById("name");
      let  email=document.getElementById("email");
      let  phone=document.getElementById("phone_number");

        function validation(){
            if(name.value==''){
                alert('Please enter name')
                return false;
            }else if(email.value==''){
                alert('Please enter email')
                return false;
            }else if(phone.value==''){
                alert('Please enter phone number')
                return false;
            }else{
                return true;
            }
        }
    </script>
</body>
</html>  


//submit.php
﻿<?php
$servername = "localhost"; 
$username = "root"; 
$password = ""; 
 $database="ignou";
// Creating a connection 
$conn = new mysqli($servername, $username, $password,$database); 
  
// Check connection 
if ($conn->connect_error) { 
    die("Connection failure: ".$conn->connect_error); 
}  
  

if(isset($_POST['submit'])){
    $name=$_POST['name'];
    $email=$_POST['email'];
    $phone_number=$_POST['phone_number'];

    // Creating a database named geekdata 
    $sql = "INSERT into survey (name, email, phone_number) VALUES ('$name', '$email', '$phone_number')"; 
    if ($conn->query($sql) === TRUE) { 
        echo "Entry Stored Successfully"; 
    } else { 
        echo "Error: " . $conn->error; 
    } 
    $conn->close(); 
}

?> 
