<?php 
// Kontrollera om användaren är inloggad 
if (!is_user_logged_in()){ 
    wp_redirect(esc_url(site_url('login'))); 
}
    get_header(); ?>
<br/><br/> <br/>    <br/><br/> <br/>    <br/><br/> <br/>

<h1> Inköpslistan </h1> 
<br/><br/> <br/>

<!-- Startar PHP och inleder med "The-loop"-->
<?php 
if (have_posts()){
while(have_posts()){ 
the_post();
?> <article>
<?php 
the_content();
?></article><?php
        }
    }
?>
<div class="buyWork">
<ul id="my-buy">
<?php 
$userBuys = new WP_Query(array( 
    'post_type' => 'buy', 
    'posts_per_page' => -1, 
    'author' => get_current_user_id()
)); 

while($userBuys->have_posts()) {
     $userBuys->the_post(); ?> 
<li>
<input class="buyTitle" value="<?php echo esc_attr(get_the_title()); ?>"> <br/>
<button class="edit-buy"><i class="fa fa-pencil" aria-hidden="true"></i>Redigera</button>
<button class="deleteBuy><i class="fa fa-trash-o" aria-hidden="true"></i>Radera</button><br/><br/><br/>
</li>
     <?php
}
?>
</ul>


    <br/><br/> <br/>
    <br/><br/> <br/>
    <br/><br/> <br/>
    <br/><br/> <br/>
    <br/><br/> <br/>
    <br/><br/> <br/>
    <br/><br/> <br/>
    <br/><br/> <br/>
    <br/><br/> <br/>


    <?php
    get_footer(); 
    ?>

    