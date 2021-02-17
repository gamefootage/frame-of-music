var genreList = document.getElementById("random-songs-genre").options
var genres = [
    {"Blues": 2},
    {"Comedy": 3},
    {"Children's Music": 4},
    {"Classical": 5},
    {"Country": 6},
    {"Electronic": 7},
    {"Holiday": 8},
    {"Opera": 9},
    {"Singer/Songwriter": 10},
    {"Jazz": 11},
    {"Latin": 12},
    {"New Age": 13},
    {"Pop": 14},
    {"R&B/Soul": 15},
    {"Soundtrack": 16},
    {"Dance": 17},
    {"Hip Hop/Rap": 18},
    {"World": 19},
    {"Alternative": 20},
    {"Rock": 21},
    {"Christian & Gospel": 22},
    {"Vocal": 23},
    {"Reggae": 24},
    {"Easy Listening": 25},
    {"J-Pop": 27},
    {"Enka": 28},
    {"Anime": 29},
    {"Kayokyoku": 30},
    {"Fitness & Workout": 50},
    {"K-Pop": 51},
    {"Karaoke": 52},
    {"Instrumental": 53},
    {"Christmas": 1080},
    {"Christmas: Children's": 1081},
    {"Christmas: Classic": 1082},
    {"Christmas: Classical": 1083},
    {"Christmas: Jazz": 1084},
    {"Christmas: Modern": 1085},
    {"Christmas: Pop": 1086},
    {"Christmas: R&B": 1087},
    {"Christmas: Religious": 1088},
    {"Christmas: Rock": 1089},
    {"Easter": 1090},
    {"Halloween": 1091},
    {"Holiday: Other": 1092},
    {"Thanksgiving": 1093},
    {"Christian & Gospel": 1094},
    {"Christian Metal": 1095},
    {"Christian Pop": 1096},
    {"Christian Rap": 1097},
    {"Christian Rock": 1098},
    {"Classic Christian": 1099},
    {"Contemporary Gospel": 1100},
    {"Gospel": 1101},
    {"Praise & Worship": 1103},
    {"Southern Gospel": 1104},
    {"Traditional Gospel": 1105},
    {"Avant-Garde Jazz": 1106},
    {"Contemporary Jazz": 1107},
    {"Crossover Jazz": 1108},
    {"Dixieland": 1109},
    {"Fusion": 1110},
    {"Latin Jazz": 1111},
    {"Mainstream Jazz": 1112},
    {"Ragtime": 1113},
    {"Smooth Jazz": 1114},
    {"Latin Jazz": 1115},
    {"Contemporary Latin": 1116},
    {"Pop in Spanish": 1117},
    {"Raices": 1118},
    {"Latin Urban": 1119},
    {"Baladas y Boleros": 1120},
    {"Alternative & Rock in Spanish": 1121},
    {"Brazilian": 1122},
    {"Regional Mexicano": 1123},
    {"Salsa y Tropical": 1124},
    {"Environmental": 1125},
    {"Healing": 1126},
    {"Meditation": 1127},
    {"Nature": 1128},
    {"Relaxation": 1129},
    {"Travel": 1130},
    {"Adult Contemporary": 1131},
    {"Britpop": 1132},
    {"Pop/Rock": 1133},
    {"Soft Rock": 1134},
    {"Teen Pop": 1135},
    {"Contemporary R&B": 1136},
    {"Disco": 1137},
    {"Doo Wop": 1138},
    {"Funk": 1139},
    {"Motown": 1140},
    {"Neo-Soul": 1141},
    {"Quiet Storm": 1142},
    {"Soul": 1143},
    {"Adult Alternative": 1144},
    {"American Trad Rock": 1145},
    {"Arena Rock": 1146},
    {"Blues-Rock": 1147},
    {"British Invasion": 1148},
    {"Death Metal/Black Metal": 1149},
    {"Glam Rock": 1150},
    {"Hair Metal": 1151},
    {"Hard Rock": 1152},
    {"Heavy Metal": 1153},
    {"Jam Bands": 1154},
    {"Prog-Rock/Art Rock": 1155},
    {"Psychedelic": 1156},
    {"Rock & Roll": 1157},
    {"Rockabilly": 1158},
    {"Roots Rock": 1159},
    {"Singer/Songwriter": 1160},
    {"German Pop": 50000066}
];

$(document).ready(function() {
    genres.forEach(option => genreList.add( new Option(Object.keys(option)[0], Object.values(option)[0]) ));
});