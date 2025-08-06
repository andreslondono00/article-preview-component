function onTooltipClick() {
  const tooltipElement = document.getElementById("tooltip");
  const tooltipStyle = window.getComputedStyle(tooltipElement);

  if (tooltipStyle.display === "none") {
    tooltipElement.style.display = "flex";
  } else if (tooltipStyle.display === "flex") {
    tooltipElement.style.display = "none";
  }
}

function onTooltipMobileClick(action) {
  switch (action) {
    case "show":
      document.getElementById("container_three").style.display = "none";
      document.getElementById("share_icon_mobile_container").style.display =
        "flex";
      break;

    case "hide":
      document.getElementById("container_three").style.display = "flex";
      document.getElementById("share_icon_mobile_container").style.display =
        "none";
      break;
  }
}
