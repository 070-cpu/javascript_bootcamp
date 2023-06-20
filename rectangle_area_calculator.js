<!DOCTYPE html>
<html> 
<head> 
  <title>Rectangle Area Calculator</title> 
  <style> 
    form { 
      display: flex; 
      flex-direction: column; 
      align-items: center; 
      margin-top: 50px; 
    } 
     
    label { 
      font-size: 20px; 
      margin-bottom: 10px; 
    } 
     
    input[type="text"] { 
      font-size: 18px; 
      padding: 5px; 
      border-radius: 5px; 
      border: 1px solid #ccc; 
      margin-bottom: 20px; 
    } 
     
    button { 
      font-size: 20px; 
      padding: 10px 20px; 
      border-radius: 5px; 
      background-color: #4CAF50; 
      color: white; 
      border: none; 
      cursor: pointer; 
    } 
  </style> 
  <script> 
    function calculate() { 
      var length = parseFloat(document.getElementById("length").value); 
      var width = parseFloat(document.getElementById("width").value); 
       
      var area = calculateArea(length, width); 
       
      alert("The area of the rectangle is: " + area); 
    } 
     
    function calculateArea(length, width) { 
      return length * width; 
    } 
  </script> 
</head> 
<body> 
  <form> 
    <label for="length">Length of Rectangle:</label> 
    <input type="text" id="length"> 
     <label for="width">Width of Rectangle:</label> 
    <input type="text" id="width"> 
    <button onclick="calculate()">Calculate the area of rectangle</button> 
  </form> 
</body> 
</html> 