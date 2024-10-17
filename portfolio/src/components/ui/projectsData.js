import options from '../../assets/Projects/Options.png';
import cube from '../../assets/Projects/Cube.png';
import monte from '../../assets/Projects/Monte.png';
import nasdaq from '../../assets/Projects/Nasdaq.png';
import graph from '../../assets/Projects/Graph.png';

export const projectsData = [
    {
        id: 1,
        title: "Black-Scholes Option Pricer",
        description: "Fullstack application that calculates the price of call and put options using the Black-Scholes pricing model. It generates heatmaps to visualize the profit and loss (P&L) based on varying spot prices and volatilities.",
        imageUrl: options,
        githubLink: "https://github.com/BhavyaJohar/Black-Scholes-Options-Pricer",
        projectLink: "https://black-scholes-options-pricer.onrender.com/",
    },
    {
        id: 2,
        title: "Virtual Rubik's Cube",
        description: "This is a virtual rubik's cube built in processing using java. The cube is formed using vectors and matrices. I've implemented automated scrambling and solving features, as well as intuitive controls.",
        imageUrl: cube,
        githubLink: "https://github.com/BhavyaJohar/rubikscube",
        projectLink: "https://youtu.be/G5r3bOP0o2A?si=hPxsT7xP_BMthhWn",
    },
    {
        id: 3,
        title: "Monte Carlo Simulation",
        description: "This project aims to perform portfolio risk management using various methods. It calculates the Value at Risk (VaR) and Conditional Value at Risk (CVaR) for a given portfolio of stocks.",
        imageUrl: monte,
        githubLink: "https://github.com/BhavyaJohar/MonteCarloSimulation",
        projectLink: "https://github.com/BhavyaJohar/MonteCarloSimulation",
    },
    {
        id: 4,
        title: "Nasdaq Price Predictor",
        description: "Machine Learning project aiming to predict an increase or decrease in the Nasdaq for the next day. I employed historical price data and technical indicators to build a predictive model.",
        imageUrl: nasdaq,
        githubLink: "https://github.com/BhavyaJohar/Nasdaq",
        projectLink: "https://github.com/BhavyaJohar/Nasdaq",
    },
    {
        id: 5,
        title: "Graph Laplacian",
        description: "Performed spectral clustering on a graph dataset to identify distinct clusters of nodes based on their connectivity patterns. Computed multiple matrices to assign nodes to different clusters.",
        imageUrl: graph,
        githubLink: "https://github.com/BhavyaJohar/GraphLaplacian",
        projectLink: "https://github.com/BhavyaJohar/GraphLaplacian",
    },
];
