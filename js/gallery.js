var wraper = document.querySelectorAll('.wraper');
var btn = document.querySelector('.load-btn');
var currentimg = 6;

btn.addEventListener('click', function () {
    for (var i = currentimg; i < currentimg + 6; i++) {
        if (wraper[i]) {
            wraper[i].style.display = 'block';
        }
    }
    currentimg += 6;

    if (currentimg >= wraper.length) {
        event.target.style.display = 'none';
    }
});


var readmore = document.querySelector('.readmore');
var pera = document.querySelector('.piercing-pera')

readmore.addEventListener('click', function () {
    pera.innerHTML = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, repellat tempora voluptatum voluptates quis autem debitis ducimus maiores corrupti sint ipsa voluptas earum, culpa ut, commodi eum nihil! Deleniti facilis molestias quos velit eius assumenda sequi unde numquam atque eaque aliquam exercitationem perspiciatis voluptatibus perferendis at, iste architecto tempore in ipsam distinctio temporibus molestiae ea. Asperiores dolorum nobis sit recusandae odio deleniti reprehenderit quis, ut in. Voluptas laborum, deleniti sed fuga magnam laboriosam dolorum aperiam libero veniam molestias quis illo tenetur iste vel quam nemo omnis consectetur eligendi repudiandae dignissimos.";  
});