const maxValue = 800;
const chartHeight = 320;

document.querySelectorAll(".bar").forEach(bar => {
    const value = Number(bar.dataset.value);

    if (!value) return; // prevents breaking if missing

    const height = (value / maxValue) * chartHeight;
    bar.style.height = height + "px";
});