// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text,
  Table,
  TableRow,
  TableHeaderItem,
  TableItem
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "../themes/vagrant";

// Import custom component
import Interactive from "../assets/interactive";

// Import CodeSlide from spectacle-code-slide
import CodeSlide from "spectacle-code-slide";

// Require CSS
require("normalize.css");
require("../themes/vagrant/index.css");


const images = {
  vagrant: require("../assets/vagrant_background.png"),
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  vagrant_muster: require("../assets/vagrant_muster.png"),
  vagrant_logo: require("../assets/vagrant_logo.png"),
  puppet: require("../assets/puppet.png"),
  puppet_structure: require("../assets/puppetstructure.png")
};

const colors = {
  background_blue: "#0094BF",
  text_blue: "#2190CB",
  white: "white"
}

preloader(images);

const theme = createTheme({
  primary: "white"
}, {
  primary: "Open Sans Condensed"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="white" bgImage={images.vagrant.replace("/", "")} bgDarken={0.7}>
            <Heading size={1} bold fit caps lineHeight={1} textColor="primary">
              Vagrant
            </Heading>
            <Heading size={2} fit textColor="secondary">
              Development environments
            </Heading>
            <Heading size={2} textColor="secondary">
               made easy.
            </Heading>
          </Slide>
          <Slide align="flex-start center" transition={["slide"]} bgColor={colors.background_blue} bgImage={images.vagrant_muster.replace("/", "")}>
            <Heading size={1}>
              Was ist Vagrant?
            </Heading>
            <List>
              <Appear><ListItem margin={10} fit textColor="primary">Ein Tool, um Entwicklungsumgebungen auf Basis von virtuellen Maschinen zu erstellen</ListItem></Appear>
              <Appear><ListItem margin={10} fit textColor="primary">"Wrapper" zwischen Virtualisierungssoftware und Systemkonfigurationswerkzeugen</ListItem></Appear>
              <Appear><ListItem margin={10} fit textColor="primary">In Ruby geschrieben :)</ListItem></Appear>
              <Appear><ListItem margin={10} fit textColor="primary">Ein Kommandozeilen-Tool &hearts;</ListItem></Appear>
            </List>
          </Slide>
          <Slide align="flex-start center" transition={["slide"]} bgColor={colors.background_blue} bgImage={images.vagrant_muster.replace("/", "")}>
            <Heading size={1}>
              Vagrant ist kein(e)
            </Heading>
            <List>
              <Appear><ListItem margin={10} fit textColor="primary">Klickibunti (<strike>GUI</strike>)..zumindest standardmäßig</ListItem></Appear>
              <Appear><ListItem margin={10} fit textColor="primary">eigene Virtualisierungssoftware</ListItem></Appear>
            </List>
          </Slide>
          <Slide align="flex-start center" transition={["slide"]} bgColor={colors.background_blue} bgImage={images.vagrant_muster.replace("/", "")}>
            <Heading size={1}>
              Vagrant ermöglicht
            </Heading>
            <List>
              <Appear><ListItem margin={10} fit textColor="primary">lokale Entwicklungsumgebungen</ListItem></Appear>
              <Appear><ListItem margin={10} fit textColor="primary">..die möglichst identisch zur produktiven Umgebungen sind</ListItem></Appear>
              <Appear><ListItem margin={10} fit textColor="primary">schnelles erstellen/löschen von Entwicklungsumgebungen</ListItem></Appear>
              <Appear><ListItem margin={10} fit textColor="primary">Provisionierung von virtuellen Maschinen (Puppet, Chef, SaltStack etc.)</ListItem></Appear>
              <Appear><ListItem margin={10} fit textColor="primary">Nutzung vorkonfigurierter VMs (<Link href="http://vagrantbox.es">VagrantBox.es</Link>)</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor={colors.background_blue} bgImage={images.vagrant_muster} notes="Installation/Set Up 'VirtualBox installieren, Vagrant installieren, vagrant init hashicorp/precise64, vagrant up'">
            <Heading size={4} textColor="primary" caps fit>Set Up / Installation</Heading>
            <List>
              <Appear><ListItem margin={10} fit textColor="primary">VirtualBox installieren</ListItem></Appear>
              <Appear><ListItem margin={10} fit textColor="primary">Vagrant installieren (<Link href="https://www.vagrantup.com/downloads.html">Download</Link>)</ListItem></Appear>
            </List>
            <Appear><CodePane textSize={18} lang="sh" margin="20px auto" size={4}>$ vagrant init hashicorp/precise64         // neue VM initialisieren</CodePane></Appear>
            <Appear><CodePane textSize={18} lang="bash" margin="20px auto" size={4}>$ vagrant up     // VM starten</CodePane></Appear>
            <Appear><CodePane textSize={18} lang="bash" margin="20px auto" size={4}>$ vagrant ssh    // SSH in VM</CodePane></Appear>
            <Appear><Heading size={4} textColor="primary" textFont="primary">
              War das alles?
            </Heading></Appear>
            <Appear><Heading fit textColor="primary" textFont="primary">
              ..grob gesehen ja, aber: Es gibt noch viel mehr
            </Heading></Appear>
          </Slide>
          <CodeSlide
            bgColor={colors.background_blue}
            bgDarken={0.3}
            bgImage={images.vagrant_muster.replace("/", "")}
            transition={[]}
            lang="js"
            code={require("raw!../assets/vagrantfile_puppet")}
            ranges={[
                { loc: [0, 26], title: "Vagrantfiles - Beispiel" },
                { loc: [0, 6], note: "Erklärungsblabla" },
                { loc: [7, 19], note: "VM Konfiguration" },
                { loc: [7, 8], note: "Sage Vagrant, es soll nachfolgende Konfiguration verwenden. (\"2\" steht für die Vagrant-Version)" },
                { loc: [8, 9], note: "Verwende die vorkonfigurierte Box 'precise32' (Ubuntu)" },
                { loc: [9, 10], note: "Setze Hostnamen der VM auf 'myprecise.box'" },
                { loc: [10, 11], note: "Netzwerkkonfiguration" },
                { loc: [12, 19], note: "Providerkonfiguration (Virtualbox und 256mb RAM)" },
                { loc: [20, 25], note: "Puppet (Provisioner) konfigurieren" },
              ]}/>
          <Slide transition={["slide"]} bgColor={colors.background_blue} bgImage={images.vagrant_muster.replace("/", "")}>
            <Image src={images.puppet.replace("/", "")} margin="0px auto 30px" height="150px"/>
            <Heading size={1}>
              Hää? Puppet?!?
            </Heading>
            <Appear>
            <Heading margin={20} fit textColor="white" size={4}>
              Jein.. Puppet ist ein sog. Provisioning- bzw. Orchestration-Tool
            </Heading></Appear>
            <Appear>
            <Text textColor="primary">
              Mithilfe von Puppet lässt sich der gewünschte Zustand eines Servers durch Code beschreiben.
              Puppet führt dann (im Optimalfall) alle Änderungen aus, welche zum Erreichen des Zustandes von Nöten sind. 
            </Text></Appear>
          </Slide>
          <Slide transition={["slide"]} bgColor={colors.background_blue} bgImage={images.vagrant_muster} notes="Puppet Modules = ">
            <Heading size={4} textColor="primary" caps>Puppet</Heading>
            <Image src={images.puppet_structure.replace("/", "")} margin="0px auto 0px" height="250px"/>
            <Appear><Text margin="20px auto" textColor="white" size={4}>Puppet Manifests enthält site.pp</Text></Appear>
            <Appear><Text margin="20px auto" textColor="white" size={4}>-&#62; Bestimmt, welche Module angewendet werden.</Text></Appear>
            <Appear><Text margin="20px auto" textColor="white" size={4}>Puppet Module enthält mehrere Manifeste.</Text></Appear>
            <Appear><Text margin="20px auto" textColor="white" size={4}>-&#62; Legen fest, was geändert wird.</Text></Appear>
          </Slide>
          <CodeSlide
            bgColor={colors.background_blue}
            bgDarken={0.3}
            bgImage={images.vagrant_muster.replace("/", "")}
            transition={[]}
            lang="js"
            code={require("raw!../assets/init.pp")}
            ranges={[
                { loc: [0, 26], title: "Puppet Manifest - Beispiel" },
                { loc: [0, 4], note: "Klassenbeschreibung" },
                { loc: [4, 5], note: "Klassendefinition" },
                { loc: [5, 8], note: "Führe einen 'exec'-/Bash-Befehl aus." },
                { loc: [9, 12], note: "Erstelle einen Hosts-Eintrag" },
                { loc: [13, 16], note: "Installiere 'htop', 'tree' und 'unzip' mit dem Package-Manager (apt-get install..)" },
                { loc: [17, 24], note: "Kopiere Datei '.bashrc' in Home-Verzeichnis des vagrant-Nutzers" },
                { loc: [0, 26], title: "Fragen zu Puppet?" }
              ]}/>
          <Slide transition={["slide"]} bgColor={colors.background_blue} bgImage={images.vagrant_muster.replace("/", "")}>
            <Heading size={1}>
              Wozu Vagrant?
            </Heading>
            <Heading textColor="white" size={4}>
              Ich habe doch &#60;VMProvider&#62;..
            </Heading>
            <Appear>
            <Heading textColor="white" size={4}>
              Ja, aber:
            </Heading>
            </Appear>
            <List>
              <Appear><ListItem margin={10} fit textColor="primary">Vagrantfiles => persistente und verteilbare Konfigurationen (Entwicklerteams, etc.)</ListItem></Appear>
              <Appear><ListItem margin={10} fit textColor="primary">Vorkonfigurierte VMs/Boxes (kürzere Installationszeit, etc.)</ListItem></Appear>
              <Appear><ListItem margin={10} fit textColor="primary">Erstellung von mehreren VMs auf einmal (man kann in Vagrantfiles mehrere VMs definieren)</ListItem></Appear>
              <Appear><ListItem margin={10} fit textColor="primary">Automatisierte Provisionierung der VMs</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor={colors.background_blue} bgImage={images.vagrant_muster.replace("/", "")}>
            <Heading caps fit>
              Demo
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor={colors.background_blue} bgImage={images.vagrant_muster.replace("/", "")}>
            <Heading caps fit>
              Fragen?
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
