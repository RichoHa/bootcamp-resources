create database playlistDB;

use playlistDB;

create table songs(
    id integer not null auto_increment,
    title VARCHAR(30) NULL,
    artist VARCHAR(30) NULL,
    genre VARCHAR(30) NULL,
    primary key (id)
);

insert into songs (title,artist,genre) values ("eye of the tiger", "surviver", "rock");

insert into songs (title,artist,genre) values ("Song2", "bob2", "genre2");

insert into songs (title,artist,genre) values ("Song3", "bob3", "genre3");