import React from "react";

function About() {
  const callAboutPage = async () => {
    try {
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    callAboutPage();
  }, []);

  return <div></div>;
}

export default About;
