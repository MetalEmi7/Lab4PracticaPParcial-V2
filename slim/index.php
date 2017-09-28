<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require 'vendor/autoload.php';
require_once 'personaApi.php';

$app = new \Slim\App;
$app->options('/{routes:.+}', function ($request, $response, $args) {
    return $response;
});

$app->add(function ($req, $res, $next) {
    $response = $next($req, $res);
    return $response
            ->withHeader('Access-Control-Allow-Origin', '*')
            ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
            ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
});


//Funcionando

$app->group('/usuario', function(){

    $this->get('/login', \personaApi::class . ':')->add(\MWparaCORS::class . ':HabilitarCORSTodos');
    
     $this->post('/alta', \personaApi::class . ':')->add(\MWparaCORS::class . ':HabilitarCORSTodos');
   
     $this->post('/baja', \personaApi::class . ':')->add(\MWparaCORS::class . ':HabilitarCORSTodos');
   
     $this->post('/update', \personaApi::class . ':')->add(\MWparaCORS::class . ':HabilitarCORSTodos');
   
     $this->delete('/delete', \personaApi::class . ':');

})->add(\MWparaAutentificar::class . ':VerificarUsuario')->add(\MWparaCORS::class . ':HabilitarCORS8080');

$app->run();

?>