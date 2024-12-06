import React from 'react';

const Info = () => {
    return (
        <div
            style={{
                textAlign: 'center',
                marginTop: '50px', // Corrected unit
                background: 'linear-gradient(to bottom, hsla(0, 90%, 50%, 0.6), hsla(240, 60%, 30%, 0.6))',
            }}
        >
            {/* Title */}
            <div>
                <strong>
                    <h1 style={{ color: 'rgba(0, 0, 80, 1)', fontFamily: 'Georgia', marginTop: '50px', fontSize: '50px' }}>
                        CANDIDATE INFORMATION
                    </h1>
                </strong>
            </div>

            {/* Container for boxes */}
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: '20px',
                    padding: '4%',
                }}
            >
                {/* Box for Trump */}
                <div
                    style={{
                        width: '45%',
                        border: '2px solid #333',
                        borderRadius: '10px',
                        backgroundImage:
                            'linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.8)), url("https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Republicanlogo.svg/872px-Republicanlogo.svg.png")',
                        backgroundPosition: 'center',
                        backgroundSize: 'contain',
                        padding: '80px',
                        boxShadow: '20px 20px 32px rgba(0,0,0,0.5)',
                    }}
                >
                    <h2
                        style={{
                            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                            fontSize: '30px',
                            textAlign: 'center',
                            color: '#555',
                        }}
                    >
                        <strong>Donald J. Trump</strong>
                    </h2>
                    <h3 style={{ fontSize: '20px', marginBottom: '20px' }}>
                        <em>Republican Party</em>
                    </h3>
                    <ul style={{ textAlign: 'left', color: '#666' }}>
                        <li>45th President of the United States</li>
                        <li>Served from January 2017 to January 2021</li>
                    </ul>
                </div>

                {/* Box for Kamala */}
                <div
                    style={{
                        width: '45%',
                        border: '2px solid #333',
                        borderRadius: '10px',
                        backgroundImage:
                            'linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.8)), url("https://banner2.cleanpng.com/20180914/sov/kisspng-democratic-party-united-states-of-america-politica-1713940652373.webp")',
                        backgroundPosition: 'center',
                        backgroundSize: 'contain',
                        padding: '80px',
                        boxShadow: '20px 20px 32px rgba(0,0,0,0.5)',
                    }}
                >
                    <h2
                        style={{
                            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                            fontSize: '30px',
                            textAlign: 'center',
                            color: '#555',
                        }}
                    >
                        <strong>Kamala D. Harris</strong>
                    </h2>
                    <h3 style={{ fontSize: '20px', marginBottom: '20px' }}>
                        <em>Democratic Party</em>
                    </h3>
                    <ul style={{ textAlign: 'left', color: '#666' }}>
                        <li>49th Vice President of the United States</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Info;
