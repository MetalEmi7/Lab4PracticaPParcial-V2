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

$app->get('/{table}/login', function (Request $request, Response $response) {
    $table = $request->getAttribute('table');
    $params = $request->getParams();
    return personaApi::getUser($table, $params);
});

$app->get('/{table}', function (Request $request, Response $response) {                             // -
    $table = $request->getAttribute('table');
    return personaApi::getAll($table);
});

$app->post('/{table}/insert', function (Request $request, Response $response) {
    $table = $request->getAttribute('table');
    $params = $request->getParams();
    return personaApi::insert($table, $params);
});

$app->post('/{table}/update', function (Request $request, Response $response) {         // -
    $table = $request->getAttribute('table');
    $params = $request->getParams();
    return personaApi::update($table, $params);
});

$app->post('/{table}/delete', function (Request $request, Response $response) {
    $table = $request->getAttribute('table');
    $params = $request->getParams();
    return personaApi::delete($table, $params);
});

/*
$app->group('/personas', function(){
    $this->get('/login', \personaApi::class . ':getUser()')->add(\MWparaCORS::class . ':HabilitarCORSTodos');    
    $this->post('/alta', \personaApi::class . ':insert()')->add(\MWparaCORS::class . ':HabilitarCORSTodos');   
    $this->post('/baja', \personaApi::class . ':')->add(\MWparaCORS::class . ':HabilitarCORSTodos');   
    $this->post('/update', \personaApi::class . ':')->add(\MWparaCORS::class . ':HabilitarCORSTodos');   
    $this->delete('/delete', \personaApi::class . ':');

})->add(\MWparaAutentificar::class . ':VerificarUsuario')->add(\MWparaCORS::class . ':HabilitarCORS8080');
*/

$app->run();

?>