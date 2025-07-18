function setup() {
  noCanvas();

  // Button
  let btn = createButton('Go to External Page');
  btn.style('font-size', '20px');
  btn.style('padding', '12px 24px');
  btn.style('margin', '20px');
  
  // Attach redirect directly in the user gesture handler
  btn.mousePressed(() => {
    // Must happen immediately on click
    window.open('https://sarahbuckius.com', '_blank');
  });

  // Helpful message
  let msg = createP("Click the button to visit an external page. This page will stay open in the background.");
  msg.style('font-size', '14px');
  msg.style('color', '#555');
  msg.style('max-width', '400px');
  msg.style('margin', '20px');
}
