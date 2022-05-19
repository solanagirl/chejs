const liquid_heat_capacity_constants = [
    ["Ammonia (l)", "9.718", "22.626", "-100.75", "192.71"],
    ["Aniline", "23.070", "15.819", "29.03", "-15.80"],
    ["Benzene", "16.157", "-0.747", "67.96", "-37.78"],
    ["1,3-Butadiene", "14.779", "22.711", "-87.96", "205.79"],
    ["Carbon tetrachloride", "15.751", "21.155", "-48.28", "101.14"],
    ["Chlorobenzene", "18.240", "11.278", "32.86", "-31.90"],
    ["Chloroform", "13.806", "19.215", "-42.89", "83.01"],
    ["Cyclohexane", "18.737", "-9.048", "141.38", "-161.62"],
    ["Ethanol", "13.444", "33.866", "-172.60", "349.17"],
    ["Ethylene oxide", "10.590", "21.039", "-86.41", "172.28"],
    ["Methanol", "9.798", "13.431", "-51.28", "131.13"],
    ["n-Propanol", "16.921", "41.653", "-210.32", "427.20"],
    ["Sulfur trioxide", "30.408", "-2.930", "137.08", "-84.73"],
    ["Toluene", "18.611", "15.133", "6.79", "16.35"],
    ["Water (l)", "9.069", "8.712", "1.25", "-0.18"],
];

const gas_heat_capacity_constants = [
    ["Methane", "1500", "4.217", "1.702", "9.081", "-2.164", undefined],
    ["Ethane", "1500", "6.369", "1.131", "19.225", "-5.561", undefined],
    ["Propane", "1500", "9.011", "1.213", "28.785", "-8.824", undefined],
    ["n-Butane", "1500", "11.928", "1.935", "36.915", "-11.402", undefined],
    ["iso-Butane", "1500", "11.901", "1.677", "37.853", "-11.945", undefined],
    ["n-Pentane", "1500", "14.731", "2.464", "45.351", "-14.111", undefined],
    ["n-Hexane", "1500", "17.550", "3.025", "53.722", "-16.791", undefined],
    ["n-Heptane", "1500", "20.361", "3.570", "62.127", "-19.486", undefined],
    ["n-Octane", "1500", "23.174", "4.108", "70.567", "-22.208", undefined],
    ["Ethylene", "1500", "5.325", "1.424", "14.394", "-4.392", undefined],
    ["Propylene", "1500", "7.792", "1.637", "22.706", "-6.915", undefined],
    ["1-Butene", "1500", "10.520", "1.967", "31.630", "-9.873", undefined],
    ["1-Pentene", "1500", "13.437", "2.691", "39.753", "-12.447", undefined],
    ["1-Hexene", "1500", "16.240", "3.220", "48.189", "-15.157", undefined],
    ["1-Heptene", "1500", "19.053", "3.768", "56.588", "-17.847", undefined],
    ["1-Octene", "1500", "21.868", "4.324", "64.960", "-20.521", undefined],
    ["Acetaldehyde", "1000", "6.506", "1.693", "17.978", "-6.158", undefined],
    ["Acetylene", "1500", "5.253", "6.132", "1.952", undefined, "-1.299"],
    ["Benzene", "1500", "10.259", "-0.206", "39.064", "-13.301", undefined],
    ["1,3-Butadiene", "1500", "10.720", "2.734", "26.786", "-8.882", undefined],
    ["Cyclohexane", "1500", "13.121", "-3.876", "63.249", "-20.928", undefined],
    ["Ethanol", "1500", "8.948", "3.518", "20.001", "-6.002", undefined],
    ["Ethylbenzene", "1500", "15.993", "1.124", "55.380", "-18.476", undefined],
    ["Ethylene oxide", "1000", "5.784", "-0.385", "23.463", "-9.296", undefined],
    ["Formaldehyde", "1500", "4.191", "2.264", "7.022", "-1.877", undefined],
    ["Methanol", "1500", "5.547", "2.211", "12.216", "-3.450", undefined],
    ["Styrene", "1500", "15.534", "2.050", "50.192", "-16.662", undefined],
    ["Toluene", "1500", "12.922", "0.290", "47.052", "-15.716", undefined],
    ["Air", "3.509", "3.355", "0.575", undefined, "-0.016"],
    ["Ammonia (g)", "1800", "4.269", "3.578", "3.020", undefined, "-0.186"],
    ["Bromine", "3000", "4.337", "4.493", "0.056", undefined, "-0.154"],
    ["Carbon monoxide", "2500", "3.507", "3.376", "0.557", undefined, "-0.031"],
    ["Carbon dioxide", "2000", "4.467", "5.457", "1.045", undefined, "-1.157"],
    ["Carbon disulfide", "1800", "5.532", "6.311", "0.805", undefined, "-0.906"],
    ["Chlorine", "3000", "4.082", "4.442", "0.089", undefined, "-0.344"],
    ["Hydrogen", "3000", "3.468", "3.249", "0.422", undefined, "0.083"],
    ["Hydrogen sulfide", "2300", "4.114", "3.931", "1.490", undefined, "-0.232"],
    ["Hydrogen chloride", "2000", "3.512", "3.156", "0.623", undefined, "0.151"],
    ["Hydrogen cyanide", "2500", "4.326", "4.736", "1.359", undefined, "-0.725"],
    ["Nitrogen", "2000", "3.502", "3.280", "0.593", undefined, "0.040"],
    ["Nitrous oxide", "2000", "4.646", "5.328", "1.214", undefined, "-0.928"],
    ["Nitric oxide", "2000", "3.590", "3.387", "0.629", undefined, "0.014"],
    ["Nitrogen dioxide", "2000", "4.447", "4.982", "1.195", undefined, "-0.792"],
    ["Dinitrogen tetroxide", "2000", "9.198", "11.660", "2.257", undefined, "-2.787"],
    ["Oxygen", "2000", "3.535", "3.639", "0.506", undefined, "-0.227"],
    ["Sulfur dioxide", "2000", "4.796", "5.699", "0.801", undefined, "-1.015"],
    ["Sulfur trioxide", "2000", "6.094", "8.060", "1.056", undefined, "-2.028"],
    ["Water (g)", "2000", "4.038", "3.470", "1.450", undefined, "0.121"],
];

const solid_heat_capacity_constants = [
    ["CaO", "2000", "5.058", "6.104", "0.443", "-1.047"],
    ["CaCO3", "1200", "9.848", "12.572", "2.637", "-3.120"],
    ["Ca(OH)2", "700", "11.217", "9.597", "5.435", undefined],
    ["CaC2", "720", "7.508", "8.254", "1.429", "-1.042"],
    ["CaCl2", "1055", "8.762", "8.646", "1.530", "-0.302"],
    ["C (graphite)", "2000", "1.026", "1.771", "0.771", "-0.867"],
    ["Cu", "1357", "2.959", "2.677", "0.815", "0.035"],
    ["CuO", "1400", "5.087", "5.780", "0.973", "-0.874"],
    ["Fe(α)", "1043", "3.005", "-0.111", "6.111", "1.150"],
    ["Fe2O3", "960", "12.480", "11.812", "9.697", "-1.976"],
    ["Fe3O4", "850", "18.138", "9.594", "27.112", "0.409"],
    ["FeS", "411", "6.573", "2.612", "13.286", undefined],
    ["I2", "386.8", "6.929", "6.481", "1.502", undefined],
    ["LiCl", "800", "5.778", "5.257", "2.476", "-0.193"],
    ["NH4Cl", "458", "10.741", "5.939", "16.105", undefined],
    ["Na", "371", "3.386", "1.988", "4.688", undefined],
    ["NaCl", "1073", "6.111", "5.526", "1.963", undefined],
    ["NaOH", "566", "7.177", "0.121", "16.316", "1.948"],
    ["NaHCO3", "400", "10.539", "5.128", "18.148", undefined],
    ["S (rhombic)", "368.3", "3.748", "4.114", "-1.728", "-0.783"],
    ["SiO2 (quartz)", "847", "5.345", "4.871", "5.365", "-1.001"],
];

module.exports = {
    liquid_heat_capacity_constants,
    gas_heat_capacity_constants,
    solid_heat_capacity_constants,
};
