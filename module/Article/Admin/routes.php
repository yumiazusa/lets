<?php


$router->match(['get', 'post'], 'article', 'ArticleController@index');
$router->match(['get', 'post'], 'article/add', 'ArticleController@add');
$router->match(['get', 'post'], 'article/edit', 'ArticleController@edit');
$router->match(['get', 'post'], 'article/delete', 'ArticleController@delete');
$router->match(['get', 'post'], 'article/show', 'ArticleController@show');
