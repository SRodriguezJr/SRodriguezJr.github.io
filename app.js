function mapColorToYear(year) {
  if (year === 2018) {
    return "red";
  }
  if (year === 2017) {
    return "blue";
  }

  if (year === 2016) {
    return "green";
  }

  if (year === 2015) {
    return "tomato";
  }
  if (year === 2014) {
    return "orange";
  }

  return "black";
}

const parensRegex = /\(([^)]+)\)/;

const years = document.getElementsByClassName("year");

for (let i = 0; i < years.length; i++) {
  const el = years[i];
  const year = el.innerHTML.match(parensRegex)[1];
  el.style.color = mapColorToYear(+year);
}
