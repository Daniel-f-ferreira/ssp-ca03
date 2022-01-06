function draw_table()
{
	$("#orders").empty();
	$.getJSONuncached = function (url)
	{
		return $.ajax(
		{
			url: url,
			type: 'GET',
			cache: false,
			success: function (html)
			{
				$("#orders").append(html);
			}
		});
	};
	$.getJSONuncached("/order/html")
};

$(document).ready(function ()
{
	draw_table();
});