import React from "react";
const About = () => {
  return (
    <div className="about-container">
      <h1 className="title">About</h1>
      <div className="note">
        <div>
          NOTE: This is just a test project for ChatGPT and Tidio Bot, it is
          possible that this website does not work as it should.
        </div>
      </div>
      <div className="content">
        <div className="about-website bg">
          This website integrates the power of OpenAI's ChatGPT with the
          user-friendly interface of Tidio Bot to provide an unmatched
          experience for our customers. With ChatGPT's advanced language
          processing capabilities and Tidio Bot's easy-to-use chatbot
          functionality, our website offers a natural and efficient way for
          customers to get the information they need.
        </div>
        <div className="installation bg">
          <h3>Installation is a breeze, simply follow these steps:</h3>
          <ol>
            <li>
              Sign up for an OpenAI API key and create a new model in the OpenAI
              API Console.
            </li>
            <li>
              Integrate the OpenAI API key and the ChatGPT model into your
              website using a language of your choice, such as JavaScript.
            </li>
            <li>
              Install Tidio Bot on your website. You can find the installation
              instructions on their website
            </li>
          </ol>
        </div>
        <div className="expect bg">
          <h3>With this integration, you can expect:</h3>
          <ul>
            <li>Quick and accurate responses to customer inquiries</li>
            <li>24/7 availability for customer service</li>
            <li>A natural and human-like conversation experience</li>
            <li>The ability to handle a wide range of customer requests</li>
          </ul>
        </div>
        <div className="links bg">
          <div>
            To find out more about ChatGPT and how to use it in your website,
            visit the OpenAI website at
            <a href="https://openai.com/" target="_blank">
              https://openai.com/
            </a>
          </div>
          <div>
            To find out more about Tidio Bot and how to use it in your website,
            visit their website at
            <a href="https://www.tidio.com/" target="_blank">
              https://www.tidio.com/
            </a>
          </div>
        </div>
        <div className="get-started">
          Get started now and take your customer service to the next level with
          ChatGPT and Tidio Bot!
        </div>
      </div>
    </div>
  );
};

export default About;
