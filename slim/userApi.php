<?php 

require_once 'db.php';

class userApi
{

	private static function getPDO() 
	{	
		return $PDOInstance = DB::getInstance(); 
	}


	/* - - - - - USUARIOS - - - - -  */

	public static function getUser($table, $params){

        try{
			$db = GenericDAO::getPDO();

			$sql = "select * from " .$table. " where nombre = :nombre and password = :password";
			$statement = $db->sendQuery($sql);
			$statement->bindValue(":nombre", $params['nombre'], PDO::PARAM_STR);
			$statement->bindValue(":password", $params['password'], PDO::PARAM_STR);
			$statement->execute();

			//fetchAll debe ser utilizado tanto para encontrar a todas las filas o a filas unicas (SIEMPRE)
			return json_encode($statement->fetchAll(PDO::FETCH_ASSOC));
		}catch(Exception $ex){
			die("Error: " . $ex->getMessage());
		}
    }



    public static function getAll($table){

        try{
			$db = GenericDAO::getPDO();

			$sql = "select * from ".$table;
			$statement = $db->sendQuery($sql);
			$statement->execute();
            $rv = $statement->fetchAll(PDO::FETCH_ASSOC);
			//fetchAll debe ser utilizado tanto para encontrar a todas las filas o a filas unicas (SIEMPRE)
			return json_encode($rv);
		}catch(Exception $ex){
			die("Error: " . $ex->getMessage());
		}
    }



	public static function insert($table,$params){

        try{
			$db = GenericDAO::getPDO();

			$sql = "insert into ".$table . "(nombre, mail, password, sexo) values (:1, :2, :3, :4)"; //<--- modificar por los campos necesarios
			$statement = $db->sendQuery($sql);
			$statement->bindValue(":1", $params['nombre'], PDO::PARAM_STR);
			$statement->bindValue(":2", $params['mail'], PDO::PARAM_STR);
			$statement->bindValue(":3", $params['password'], PDO::PARAM_STR);			 //para otros tipos de constantes predefinidas ver http://php.net/manual/es/pdo.constants.php
			//$statement->bindValue(":4", $params['foto'], PDO::PARAM_STR);
			$statement->bindValue(":4", $params['sexo'], PDO::PARAM_STR);
			$statement->execute();

		}catch(Exception $ex){
			$message = $ex->getMessage();
			die("Error: " . $ex->getMessage());
		}
    }



	public static function update($table,$params){

        try{
			$db = GenericDAO::getPDO();

			$sql = "update ".$table . " set nombre = :1,  mail = :2, password = :3, sexo = :4 where id=:id"; //<---- modificar los campos que sean necesarios
			$statement = $db->sendQuery($sql);
			$statement->bindValue(":1", $params['nombre'], PDO::PARAM_STR);
			$statement->bindValue(":2", $params['mail'], PDO::PARAM_STR);
			$statement->bindValue(":3", $params['password'], PDO::PARAM_STR);			 //para otros tipos de constantes predefinidas ver http://php.net/manual/es/pdo.constants.php
			//$statement->bindValue(":4", $params['foto'], PDO::PARAM_STR);
			$statement->bindValue(":4", $params['sexo'], PDO::PARAM_STR);
			$statement->execute();

		}catch(Exception $ex){
			$message = $ex->getMessage();
			die("Error: " . $ex->getMessage());
		}
    }



	public static function delete($table,$id){

        try{
			$db = GenericDAO::getPDO();

			$sql = "delete from ".$table . " where id = :id"; //<--- modificar por la condición necesaria
			$statement = $db->sendQuery($sql);
			$statement->bindValue(":id", $id, PDO::PARAM_INT);	//para otros tipos de constantes predefinidas ver http://php.net/manual/es/pdo.constants.php
			$statement->execute();

		}catch(Exception $ex){
			$message = $ex->getMessage();
			die("Error: " . $ex->getMessage());
		}
    }
}
?>