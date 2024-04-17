import React from 'react';

function FilterComponent({ filters, setFilters, onSearch }) {
    const { dateOccurred, areaName, crimeCode, violentLevel, latitude, longitude, radius } = filters;

    const areaNames = [

        "Central",
        "Devonshire",
        "Foothill",
        "Harbor",
        "Hollenbeck",
        "Hollywood",
        "Mission",
        "N Hollywood",
        "Newton",
        "Northeast",
        "Olympic",
        "Pacific",
        "Rampart",
        "Southeast",
        "Southwest",
        "Topanga",
        "Van Nuys",
        "West LA",
        "West Valley",
        "Wilshire"
    ];

    const violentLevels = ['violent', 'minor violent', 'other']; // Example crime codes'
    const crimes = [{ "Crm_Cd": "110", "Crm_Cd_Desc": "CRIMINAL HOMICIDE" }, { "Crm_Cd": "113", "Crm_Cd_Desc": "MANSLAUGHTER, NEGLIGENT" }, { "Crm_Cd": "121", "Crm_Cd_Desc": "RAPE, FORCIBLE" }, { "Crm_Cd": "122", "Crm_Cd_Desc": "RAPE, ATTEMPTED" }, { "Crm_Cd": "210", "Crm_Cd_Desc": "ROBBERY" }, { "Crm_Cd": "220", "Crm_Cd_Desc": "ATTEMPTED ROBBERY" }, { "Crm_Cd": "230", "Crm_Cd_Desc": "ASSAULT WITH DEADLY WEAPON, AGGRAVATED ASSAULT" }, { "Crm_Cd": "231", "Crm_Cd_Desc": "ASSAULT WITH DEADLY WEAPON ON POLICE OFFICER" }, { "Crm_Cd": "235", "Crm_Cd_Desc": "CHILD ABUSE (PHYSICAL) - AGGRAVATED ASSAULT" }, { "Crm_Cd": "236", "Crm_Cd_Desc": "INTIMATE PARTNER - AGGRAVATED ASSAULT" }, { "Crm_Cd": "237", "Crm_Cd_Desc": "CHILD NEGLECT (SEE 300 W.I.C.)" }, { "Crm_Cd": "250", "Crm_Cd_Desc": "SHOTS FIRED AT MOVING VEHICLE, TRAIN OR AIRCRAFT" }, { "Crm_Cd": "251", "Crm_Cd_Desc": "SHOTS FIRED AT INHABITED DWELLING" }, { "Crm_Cd": "310", "Crm_Cd_Desc": "BURGLARY" }, { "Crm_Cd": "320", "Crm_Cd_Desc": "BURGLARY, ATTEMPTED" }, { "Crm_Cd": "330", "Crm_Cd_Desc": "BURGLARY FROM VEHICLE" }, { "Crm_Cd": "331", "Crm_Cd_Desc": "THEFT FROM MOTOR VEHICLE - GRAND ($950.01 AND OVER)" }, { "Crm_Cd": "341", "Crm_Cd_Desc": "THEFT-GRAND ($950.01 & OVER)EXCPT,GUNS,FOWL,LIVESTK,PROD" }, { "Crm_Cd": "343", "Crm_Cd_Desc": "SHOPLIFTING-GRAND THEFT ($950.01 & OVER)" }, { "Crm_Cd": "345", "Crm_Cd_Desc": "DISHONEST EMPLOYEE - GRAND THEFT" }, { "Crm_Cd": "347", "Crm_Cd_Desc": "GRAND THEFT / INSURANCE FRAUD" }, { "Crm_Cd": "349", "Crm_Cd_Desc": "GRAND THEFT / AUTO REPAIR" }, { "Crm_Cd": "350", "Crm_Cd_Desc": "THEFT, PERSON" }, { "Crm_Cd": "351", "Crm_Cd_Desc": "PURSE SNATCHING" }, { "Crm_Cd": "352", "Crm_Cd_Desc": "PICKPOCKET" }, { "Crm_Cd": "353", "Crm_Cd_Desc": "DRUNK ROLL" }, { "Crm_Cd": "354", "Crm_Cd_Desc": "THEFT OF IDENTITY" }, { "Crm_Cd": "410", "Crm_Cd_Desc": "BURGLARY FROM VEHICLE, ATTEMPTED" }, { "Crm_Cd": "420", "Crm_Cd_Desc": "THEFT FROM MOTOR VEHICLE - PETTY ($950 & UNDER)" }, { "Crm_Cd": "421", "Crm_Cd_Desc": "THEFT FROM MOTOR VEHICLE - ATTEMPT" }, { "Crm_Cd": "433", "Crm_Cd_Desc": "DRIVING WITHOUT OWNER CONSENT (DWOC)" }, { "Crm_Cd": "434", "Crm_Cd_Desc": "FALSE IMPRISONMENT" }, { "Crm_Cd": "435", "Crm_Cd_Desc": "LYNCHING" }, { "Crm_Cd": "436", "Crm_Cd_Desc": "LYNCHING - ATTEMPTED" }, { "Crm_Cd": "437", "Crm_Cd_Desc": "RESISTING ARREST" }, { "Crm_Cd": "438", "Crm_Cd_Desc": "RECKLESS DRIVING" }, { "Crm_Cd": "439", "Crm_Cd_Desc": "FALSE POLICE REPORT" }, { "Crm_Cd": "440", "Crm_Cd_Desc": "THEFT PLAIN - PETTY ($950 & UNDER)" }, { "Crm_Cd": "441", "Crm_Cd_Desc": "THEFT PLAIN - ATTEMPT" }, { "Crm_Cd": "442", "Crm_Cd_Desc": "SHOPLIFTING - PETTY THEFT ($950 & UNDER)" }, { "Crm_Cd": "443", "Crm_Cd_Desc": "SHOPLIFTING - ATTEMPT" }, { "Crm_Cd": "444", "Crm_Cd_Desc": "DISHONEST EMPLOYEE - PETTY THEFT" }, { "Crm_Cd": "446", "Crm_Cd_Desc": "PETTY THEFT - AUTO REPAIR" }, { "Crm_Cd": "450", "Crm_Cd_Desc": "THEFT FROM PERSON - ATTEMPT" }, { "Crm_Cd": "451", "Crm_Cd_Desc": "PURSE SNATCHING - ATTEMPT" }, { "Crm_Cd": "452", "Crm_Cd_Desc": "PICKPOCKET, ATTEMPT" }, { "Crm_Cd": "453", "Crm_Cd_Desc": "DRUNK ROLL - ATTEMPT" }, { "Crm_Cd": "470", "Crm_Cd_Desc": "TILL TAP - GRAND THEFT ($950.01 & OVER)" }, { "Crm_Cd": "471", "Crm_Cd_Desc": "TILL TAP - PETTY ($950 & UNDER)" }, { "Crm_Cd": "472", "Crm_Cd_Desc": "TILL TAP - ATTEMPT" }, { "Crm_Cd": "473", "Crm_Cd_Desc": "THEFT, COIN MACHINE - GRAND ($950.01 & OVER)" }, { "Crm_Cd": "474", "Crm_Cd_Desc": "THEFT, COIN MACHINE - PETTY ($950 & UNDER)" }, { "Crm_Cd": "475", "Crm_Cd_Desc": "THEFT, COIN MACHINE - ATTEMPT" }, { "Crm_Cd": "480", "Crm_Cd_Desc": "BIKE - STOLEN" }, { "Crm_Cd": "485", "Crm_Cd_Desc": "BIKE - ATTEMPTED STOLEN" }, { "Crm_Cd": "487", "Crm_Cd_Desc": "BOAT - STOLEN" }, { "Crm_Cd": "510", "Crm_Cd_Desc": "VEHICLE - STOLEN" }, { "Crm_Cd": "520", "Crm_Cd_Desc": "VEHICLE - ATTEMPT STOLEN" }, { "Crm_Cd": "622", "Crm_Cd_Desc": "BATTERY ON A FIREFIGHTER" }, { "Crm_Cd": "623", "Crm_Cd_Desc": "BATTERY POLICE (SIMPLE)" }, { "Crm_Cd": "624", "Crm_Cd_Desc": "BATTERY - SIMPLE ASSAULT" }, { "Crm_Cd": "625", "Crm_Cd_Desc": "OTHER ASSAULT" }, { "Crm_Cd": "626", "Crm_Cd_Desc": "INTIMATE PARTNER - SIMPLE ASSAULT" }, { "Crm_Cd": "627", "Crm_Cd_Desc": "CHILD ABUSE (PHYSICAL) - SIMPLE ASSAULT" }, { "Crm_Cd": "647", "Crm_Cd_Desc": "THROWING OBJECT AT MOVING VEHICLE" }, { "Crm_Cd": "648", "Crm_Cd_Desc": "ARSON" }, { "Crm_Cd": "649", "Crm_Cd_Desc": "DOCUMENT FORGERY / STOLEN FELONY" }, { "Crm_Cd": "651", "Crm_Cd_Desc": "DOCUMENT WORTHLESS ($200.01 & OVER)" }, { "Crm_Cd": "652", "Crm_Cd_Desc": "DOCUMENT WORTHLESS ($200 & UNDER)" }, { "Crm_Cd": "653", "Crm_Cd_Desc": "CREDIT CARDS, FRAUD USE ($950.01 & OVER)" }, { "Crm_Cd": "654", "Crm_Cd_Desc": "CREDIT CARDS, FRAUD USE ($950 & UNDER" }, { "Crm_Cd": "660", "Crm_Cd_Desc": "COUNTERFEIT" }, { "Crm_Cd": "661", "Crm_Cd_Desc": "UNAUTHORIZED COMPUTER ACCESS" }, { "Crm_Cd": "662", "Crm_Cd_Desc": "BUNCO, GRAND THEFT" }, { "Crm_Cd": "664", "Crm_Cd_Desc": "BUNCO, PETTY THEFT" }, { "Crm_Cd": "666", "Crm_Cd_Desc": "BUNCO, ATTEMPT" }, { "Crm_Cd": "668", "Crm_Cd_Desc": "EMBEZZLEMENT, GRAND THEFT ($950.01 & OVER)" }, { "Crm_Cd": "670", "Crm_Cd_Desc": "EMBEZZLEMENT, PETTY THEFT ($950 & UNDER)" }, { "Crm_Cd": "740", "Crm_Cd_Desc": "VANDALISM - FELONY ($400 & OVER, ALL CHURCH VANDALISMS)" }, { "Crm_Cd": "745", "Crm_Cd_Desc": "VANDALISM - MISDEAMEANOR ($399 OR UNDER)" }, { "Crm_Cd": "753", "Crm_Cd_Desc": "DISCHARGE FIREARMS/SHOTS FIRED" }, { "Crm_Cd": "755", "Crm_Cd_Desc": "BOMB SCARE" }, { "Crm_Cd": "756", "Crm_Cd_Desc": "WEAPONS POSSESSION/BOMBING" }, { "Crm_Cd": "760", "Crm_Cd_Desc": "LEWD/LASCIVIOUS ACTS WITH CHILD" }, { "Crm_Cd": "761", "Crm_Cd_Desc": "BRANDISH WEAPON" }, { "Crm_Cd": "762", "Crm_Cd_Desc": "LEWD CONDUCT" }, { "Crm_Cd": "763", "Crm_Cd_Desc": "STALKING" }, { "Crm_Cd": "805", "Crm_Cd_Desc": "PIMPING" }, { "Crm_Cd": "806", "Crm_Cd_Desc": "PANDERING" }, { "Crm_Cd": "810", "Crm_Cd_Desc": "SEX,UNLAWFUL(INC MUTUAL CONSENT, PENETRATION W/ FRGN OBJ" }, { "Crm_Cd": "812", "Crm_Cd_Desc": "CRM AGNST CHLD (13 OR UNDER) (14-15 & SUSP 10 YRS OLDER)" }, { "Crm_Cd": "813", "Crm_Cd_Desc": "CHILD ANNOYING (17YRS & UNDER)" }, { "Crm_Cd": "815", "Crm_Cd_Desc": "SEXUAL PENETRATION W/FOREIGN OBJECT" }, { "Crm_Cd": "820", "Crm_Cd_Desc": "ORAL COPULATION" }, { "Crm_Cd": "821", "Crm_Cd_Desc": "SODOMY/SEXUAL CONTACT B/W PENIS OF ONE PERS TO ANUS OTH" }, { "Crm_Cd": "822", "Crm_Cd_Desc": "HUMAN TRAFFICKING - COMMERCIAL SEX ACTS" }, { "Crm_Cd": "840", "Crm_Cd_Desc": "BEASTIALITY, CRIME AGAINST NATURE SEXUAL ASSLT WITH ANIM" }, { "Crm_Cd": "845", "Crm_Cd_Desc": "SEX OFFENDER REGISTRANT OUT OF COMPLIANCE" }, { "Crm_Cd": "850", "Crm_Cd_Desc": "INDECENT EXPOSURE" }, { "Crm_Cd": "860", "Crm_Cd_Desc": "BATTERY WITH SEXUAL CONTACT" }, { "Crm_Cd": "865", "Crm_Cd_Desc": "DRUGS, TO A MINOR" }, { "Crm_Cd": "870", "Crm_Cd_Desc": "CHILD ABANDONMENT" }, { "Crm_Cd": "880", "Crm_Cd_Desc": "DISRUPT SCHOOL" }, { "Crm_Cd": "882", "Crm_Cd_Desc": "INCITING A RIOT" }, { "Crm_Cd": "884", "Crm_Cd_Desc": "FAILURE TO DISPERSE" }, { "Crm_Cd": "886", "Crm_Cd_Desc": "DISTURBING THE PEACE" }, { "Crm_Cd": "888", "Crm_Cd_Desc": "TRESPASSING" }, { "Crm_Cd": "890", "Crm_Cd_Desc": "FAILURE TO YIELD" }, { "Crm_Cd": "900", "Crm_Cd_Desc": "VIOLATION OF COURT ORDER" }, { "Crm_Cd": "901", "Crm_Cd_Desc": "VIOLATION OF RESTRAINING ORDER" }, { "Crm_Cd": "902", "Crm_Cd_Desc": "VIOLATION OF TEMPORARY RESTRAINING ORDER" }, { "Crm_Cd": "903", "Crm_Cd_Desc": "CONTEMPT OF COURT" }, { "Crm_Cd": "910", "Crm_Cd_Desc": "KIDNAPPING" }, { "Crm_Cd": "920", "Crm_Cd_Desc": "KIDNAPPING - GRAND ATTEMPT" }, { "Crm_Cd": "922", "Crm_Cd_Desc": "CHILD STEALING" }, { "Crm_Cd": "924", "Crm_Cd_Desc": "TELEPHONE PROPERTY - DAMAGE" }, { "Crm_Cd": "928", "Crm_Cd_Desc": "THREATENING PHONE CALLS/LETTERS" }, { "Crm_Cd": "930", "Crm_Cd_Desc": "CRIMINAL THREATS - NO WEAPON DISPLAYED" }, { "Crm_Cd": "931", "Crm_Cd_Desc": "REPLICA FIREARMS(SALE,DISPLAY,MANUFACTURE OR DISTRIBUTE)" }, { "Crm_Cd": "932", "Crm_Cd_Desc": "PEEPING TOM" }, { "Crm_Cd": "933", "Crm_Cd_Desc": "PROWLER" }, { "Crm_Cd": "940", "Crm_Cd_Desc": "EXTORTION" }, { "Crm_Cd": "942", "Crm_Cd_Desc": "BRIBERY" }, { "Crm_Cd": "943", "Crm_Cd_Desc": "CRUELTY TO ANIMALS" }, { "Crm_Cd": "944", "Crm_Cd_Desc": "CONSPIRACY" }, { "Crm_Cd": "946", "Crm_Cd_Desc": "OTHER MISCELLANEOUS CRIME" }, { "Crm_Cd": "948", "Crm_Cd_Desc": "BIGAMY" }, { "Crm_Cd": "949", "Crm_Cd_Desc": "ILLEGAL DUMPING" }, { "Crm_Cd": "950", "Crm_Cd_Desc": "DEFRAUDING INNKEEPER/THEFT OF SERVICES, OVER $950.01" }, { "Crm_Cd": "951", "Crm_Cd_Desc": "DEFRAUDING INNKEEPER/THEFT OF SERVICES, $950 & UNDER" }, { "Crm_Cd": "954", "Crm_Cd_Desc": "CONTRIBUTING" }, { "Crm_Cd": "956", "Crm_Cd_Desc": "LETTERS, LEWD  -  TELEPHONE CALLS, LEWD" }];
    return (
        
        <div>
            <div  style={{
            width: '100%', 
            textAlign: 'center', 
            padding: '20px 0', 
            fontSize: '48px', 
            fontWeight: 'bold', 
            background: '#f8f9fa', 
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
           marginBottom: '20px'
        }}>Los Angeles Crime Map</div>
        <div  style={{ margin: '0 auto',width: '60%', alignItems: 'center', height:'100px'}}>
            <div style={{ display: 'inline-block' }}>
            <div style={{ display: 'flex', marginBottom: '10px' }}>
                <div>Time:</div>
            <select value={dateOccurred} onChange={e => setFilters({ ...filters, dateOccurred: e.target.value })} style={{ marginRight: '20px' }}>
                <option value=""   style={{ marginRight: '10px' }}>Select a year</option>
                {[...Array(4)].map((_, i) => (
                    <option key={i} value={2020 + i}>{2020 + i}</option>
                ))}
            </select>



            {/* <select value={crimeCode} onChange={e => setFilters({ ...filters, crimeCode: e.target.value })}>
                {crimeCodes.map(code => (
                    <option key={code} value={code}>{code}</option>
                ))}
            </select> */}
            <div>Crime Type:</div>
            <select value={crimeCode} onChange={e => setFilters({ ...filters, crimeCode: e.target.value })}>
                <option value={""}>Select a crime type</option>
                {crimes.map(crime => (
                    <option key={crime.Crm_Cd} value={crime.Crm_Cd}>{crime.Crm_Cd_Desc}</option>
                ))}
            </select>
            </div>
            {/* <select value={violentLevel} onChange={e => setFilters({ ...filters, violentLevel: e.target.value })}>
                {violentLevels.map((level, index) => (
                    <option key={level} value={3 - index}>{level}</option>
                ))}
            </select> */}
            <div style={{ display: 'flex', marginBottom: '10px' }}>
                <div>Search Method:</div>
            <select value={filters.selectionType} onChange={e => setFilters({ ...filters, selectionType: e.target.value })} style={{ marginRight: '10px' }}>
                <option value="area">Area</option>
                <option value="pinpoint">Pinpoint</option>
            </select>
            <div  style={{ marginLeft: '160px' }}>Search Area:</div>
            <select value={areaName} onChange={e => setFilters({ ...filters, areaName: e.target.value })} disabled={filters.selectionType !== 'area'}>
                <option value="">Select a area</option>
                {areaNames.map(name => (
                    <option key={name} value={name}>{name}</option>
                ))}
            </select>
            </div>
            <div style={{ display: 'flex', marginBottom: '10px' }}>
            <div>Latitude:</div>
            <input type="number" placeholder="Latitude" value={latitude} onChange={e => setFilters({ ...filters, latitude: parseFloat(e.target.value) })} disabled={filters.selectionType !== 'pinpoint'} style={{ marginRight: '10px' }} />
            <div>Longtitude:</div>
            <input type="number" placeholder="Longitude" value={longitude} onChange={e => setFilters({ ...filters, longitude: parseFloat(e.target.value) })} disabled={filters.selectionType !== 'pinpoint'} style={{ marginRight: '10px' }}/>
            <div>Radius:</div>
            <input type="number" placeholder="Radius" value={radius} onChange={e => setFilters({ ...filters, radius: parseFloat(e.target.value) })} disabled={filters.selectionType !== 'pinpoint'} style={{ marginRight: '10px' }}/>
            
            </div>
            </div>
            <div style={{ display: 'inline-block' , marginLeft:'80px',marginBottom:'15px', marginTop:'15px',position: 'absolute'  }}>
            
            <button onClick={onSearch}  style={{ height: '60px' ,width:'120px' ,fontSize: '24px',}}>Search</button>
            </div>
            </div>
            

        </div>
    );
}

export default FilterComponent;