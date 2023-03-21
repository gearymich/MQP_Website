import React, {useEffect} from 'react';

  const SeizureBarchart = () => {
    useEffect(() => {
      const script = document.createElement("script");
      script.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
      script.async = true;
      document.body.appendChild(script);

      const containerDiv = document.getElementById("vizContainer");
      const url =
        "https://public.tableau.com/views/AllDashboards_16793563017790/Story1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link";
      const options = {
        hideTabs: true,
        width: "150%",
        height: "964px",
        onFirstInteractive: () => {
          // The viz is now ready and can be safely used.
        },
      };
      const viz = new window.tableau.Viz(containerDiv, url, options);

      return () => {
        viz.dispose();
        document.body.removeChild(script);
      };
    }, []);

    return <div id="vizContainer"></div>;
  };

export default SeizureBarchart;
  
export { SeizureBarchart };