<?php
// ネームスペース
require_once 'app/shop/book.php';
require_once 'app/Review/book.php';

use app\shop\Book;
use app\Review\Book as BookReview;

$book = new Book();
echo $book->getPrice();

$book_review = new BookReview();
echo $book_review->getPoint();