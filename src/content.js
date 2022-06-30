$(function main(e) {

    // 所定過不足計の計算
    let kabusokukei = $("th:contains('所定過不足計')").next().children()
    let kabusokukei_time = kabusokukei.html();
    if (kabusokukei_time != null) {
        console.log(kabusokukei_time)
        let hours = kabusokukei_time.split(':')[0];
        let day = hours / 8;
        daystring = " (" + day + "日)"
        kabusokukei.append(daystring)
    }
    //工数
    $(document).on("click", "td:contains('new')", function () {
        let text = $('#un-match-time').text()
        const result = text.match(/実労働時間と工数合計に (.*) の差分があります/);
        let form = $(this).next().next().next().children('.form-control');
        form.val(result[1]);
        var dom = form.get()
        dom[0].dispatchEvent(new Event("change", { bubbles: true }));
    });
});