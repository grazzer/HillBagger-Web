import Box from "./box";

export default function ClassificationBox({
  ClassificationCSV,
}: {
  ClassificationCSV: string;
}) {
  var textArray = [];
  var jsxArray = [];
  textArray = ClassificationCSV.split(",");
  for (var i = 0; i < textArray.length; i++) {
    var text = "";
    switch (textArray[i]) {
      case "Ma":
        text = "Marilyn";
        break;
      case "Hu":
        text = "Hump";
        break;
      case "Sim":
        text = "Simm";
        break;
      case "?":
        text = "Dodd";
        break;
      case "M":
        text = "Munro";
        break;
      case "MT":
        text = "Munro Top";
        break;
      case "F":
        text = "Furth";
        break;
      case "C":
        text = "Corbett";
        break;
      case "G":
        text = "Graham";
        break;
      case "D":
        text = "Donald";
        break;
      case "DT":
        text = "Donald Top";
        break;
      case "Hew":
        text = "Hewitt";
        break;
      case "N":
        text = "Nuttall";
        break;
      case "Dew":
        text = "Dewey";
        break;
      case "DDew":
        text = "Donald-Dewey";
        break;
      case "HF":
        text = "Highland Five";
        break;
      case "Zero":
        text = "0-99m";
        break;
      case "One":
        text = "100-199m";
        break;
      case "Two":
        text = "200-299m";
        break;
      case "Three":
        text = "300-399m?";
        break;
      case "Four":
        text = "400-499m";
        break;
      case "W":
        text = "Wainwright";
        break;
      case "WO":
        text = "Wainwright Outlying Fell";
        break;
      case "B":
        text = "Birkett";
        break;
      case "Fel":
        text = "Fellranger";
        break;
      case "E":
        text = "Ethel";
        break;
      case "CoU":
        text = "County Top";
        break;
      case "CoL":
        text = "London";
        break;
      case "SIB":
        text = "Significant Island of Britain";
        break;
      case "Dil":
        text = "Dillon";
        break;
      case "A":
        text = "Arderin";
        break;
      case "VL":
        text = "Vandeleur-Lynam";
        break;
      case "Tu":
        text = "Trump";
        break;
      case "Mur":
        text = "Murdo";
        break;
      case "CT":
        text = "Corbett Top";
        break;
      case "GT":
        text = "Graham Top";
        break;
      case "Bg":
        text = "Bridge";
        break;
      case "Y":
        text = "Yeaman";
        break;
      case "Cm":
        text = "Clem";
        break;
      case "Ca":
        text = "Carn";
        break;
      case "Bin":
        text = "Binnion";
        break;
      default:
        text = textArray[i];
    }
    jsxArray.push(<p> {text} </p>);
    if (i != textArray.length - 1) jsxArray.push(<p className="pr-2">,</p>);
  }
  return (
    <Box title="Classification">
      <div className="flex flex-row flex-wrap">{jsxArray}</div>
    </Box>
  );
}
