import React from 'react';

const BoxColor = ({ r, g, b }) => {
  const clamp = (value) => Math.min(255, Math.max(0, value));
  const clampedR = clamp(r);
  const clampedG = clamp(g);
  const clampedB = clamp(b);

  const rgbHex = `#${clampedR.toString(16).padStart(2, '0')}${clampedG.toString(16).padStart(2, '0')}${clampedB.toString(16).padStart(2, '0')}`;

  //check the contrast to see if the text should be black or white
  const luminance = (0.299 * clampedR + 0.587 * clampedG + 0.114 * clampedB) / 255;

  return (
    <div
      style={{
        width: '800px',
        height: '100px',
        backgroundColor: `rgb(${clampedR}, ${clampedG}, ${clampedB})`,
        color: luminance > 0.5 ? 'black' : 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        outline: '2px solid black',
        marginTop: "20px",
        marginLeft: "20px"
      }}
    >
      <p style={{ margin: '0', padding: '5px', lineHeight: '1' }}>{`rgb(${clampedR}, ${clampedG}, ${clampedB})`}</p>
      <p style={{ margin: '0', padding: '5px', lineHeight: '1' }}>{rgbHex}</p>
    </div>
  );
};

export default BoxColor;