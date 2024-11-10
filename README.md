# EcoLens
EcoLens is a browser extension that integrates sustainability insights into online shopping platforms, allowing users to make informed, eco-friendly purchasing decisions. It provides real-time environmental ratings, offers alternative product recommendations, and tracks user progress toward a greener lifestyle.

## Installation & Setup  

### 1. Clone the Repository  
Clone this repository to your local machine. Open a terminal and run:  
```bash
git clone https://github.com/dawoodwasif/EcoLens
cd EcoLens
```
### 2. Backend Setup
EcoLens uses a Node.js backend to handle requests and fetch sustainability insights. Follow these steps to set up and run the backend:
```bash
cd website       # Navigate to the backend folder
npm install      # Install all dependencies
npm start        # Start the backend server
```
This will start the backend server on http://localhost:5000. Ensure the backend server is running before you proceed to load the extension.
### 3. Load the Extension
- Open **Google Chrome** and navigate to `chrome://extensions/`.
- Enable **Developer mode** (toggle it on in the top right corner).
- Click on **Load unpacked** and select the `EcoLens` folder (the root folder of this repository) where the `manifest.json` file is located.

### 4. Using EcoLens
1. **Navigate to an Online Shopping Website**: EcoLens currently supports Amazon, Walmart, Target, and Instacart. Go to one of these platforms and select a product page.
2. **Activate EcoLens**: The extension icon should appear in your toolbar. Click on it to open the EcoLens popup.
3. **View Sustainability Ratings**: EcoLens will display ratings for climate impact, forest conservation, water usage, and an overall sustainability score.
4. **Ask Questions & Get Recommendations**: Use the built-in chat to ask questions about the product’s environmental impact or request eco-friendly alternatives.
5. **Track Your Progress**: EcoLens helps you monitor your contribution towards sustainability over time.


## Inspiration
As online shopping grows, so does its hidden environmental toll — from plastic pollution to deforestation and water depletion. Yet, consumers lack real-time insight into the ecological impacts of their purchases. **EcoLens**  is the first-ever platform to bridge this knowledge gap, empowering shoppers with real-time insights to make greener choices effortlessly.

## What it does
**EcoLens** is a revolutionary browser extension that brings sustainability insights directly to your favorite online shopping platforms. It provides real-time ratings on **Climate, Forest & Water Impact**, alongside an **Overall Sustainability Score**. With EcoLens, you can:
- Instantly assess the environmental impact of any product
- Ask questions and receive recommendations for greener alternatives
- Track your sustainability progress and make a difference, one purchase at a time

## How we built it
I used a combination of **Node.js** for the browser extension, **OpenAI’s API** for QA, and recommendations, and **sustainability databases** for authentic impact data, ratings, and scores. Our extension integrates seamlessly with platforms like Amazon, Target, Walmart, and Instacart to deliver relevant, up-to-date insights.

## Challenges we ran into
Sourcing accurate, up-to-date sustainability metrics was a significant challenge. Additionally, implementing logic for scraping and interpreting retailer data for each unique retailer's website, for sustainability ratings required meticulous work.

## Accomplishments that we're proud of
- Successfully delivering **real-time sustainability data** directly into users’ shopping experiences, allowing for immediate, informed decisions.
- Developing a **recommendation system** that suggests eco-friendly alternatives, empowering users to choose products with lower environmental impact.
- Developing an **intuitive, user-friendly interface** that makes sustainability accessible and engaging for everyone, regardless of their level of environmental knowledge.
- Implementing a **user progress tracking feature** that lets users monitor their individual contributions to a greener footprint over time, motivating them to continue making eco-conscious choices.

## What we learned
I gained a deeper understanding of consumer goods' environmental costs and honed my skills in handling complex datasets. Most importantly, I realized the power of tech in driving sustainable change by empowering informed decisions.

## What's next for EcoLens
I plan to expand EcoLens to cover more retailers and refine our rating algorithms with advanced AI insights. Our vision includes launching the Chrome Extension Store to reach a broader audience and make eco-friendly shopping accessible to all. I also plan to develop a community feature where users can share sustainable swaps, track collective progress, and inspire others to make greener choices. 


**Shop smart, shop green, with EcoLens!**

