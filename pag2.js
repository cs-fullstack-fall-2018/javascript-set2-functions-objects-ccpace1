function pageinfo() {
    document.write("Doc Title: "+document.title + "<br/>");
    document.write("Doc Location: " + document.location + "<br/>");
    document.write("Doc Last Modified: " + document.lastModified + "<br/>");

}

document.write("Doc Ht: " +window.innerHeight);
document.write(",");
document.writeln("Doc Width: " + window.innerWidth);

document.writeln(" Page path is " + window.location.href);

