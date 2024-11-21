<script>

    
let image = "https://picsum.photos/id/70/367/267"
let photo = "https://picsum.photos/id/88/367/267"
let picture = "https://picsum.photos/id/93/367/267"

</script>


<div class="photos">
    <div class="image-wrapper">
    <img src={image} alt="flex egenskaper"></div>
    <div class="image-wrapper">

    <img src={photo}
    alt="flex egenskaper"></div>
    <div class="image-wrapper">

    <img src={picture}
    alt="flex egenskaper"></div>
</div>



<style>
    .photos{
        display:flex;
        background-color: beige;
        max-width: 90vw;
        align-items: center;
        justify-content: center;

        overflow: hidden;
    }


    .image-wrapper img{
        margin: 10px;

        width: 100%;

    }

    .image-wrapper{
        flex:1;
    }

    .image-wrapper:hover { flex:2; }

    .image-wrapper:active { transform: scale(0.9); }
 </style>