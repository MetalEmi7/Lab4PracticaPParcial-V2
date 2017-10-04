<?php
require_once 'db.php';

class personaApi
{
	private static function getPDO() 
	{return $PDOInstance = DB::getInstance();}




	public static function getUser($table, $params){
        try{
			$db = personaApi::getPDO();

			$sql = "select * from " .$table. " where nombre = :nombre and password = :password";
			$statement = $db->sendQuery($sql);
			$statement->bindValue(":nombre", $params['nombre'], PDO::PARAM_STR);
			$statement->bindValue(":password", $params['password'], PDO::PARAM_STR);
			$statement->execute();

			return json_encode($statement->fetchAll(PDO::FETCH_ASSOC));
		}catch(Exception $ex){
			die("Error: " . $ex->getMessage());
		}
    }




    public static function getAll($table){

        try{
			$db = personaApi::getPDO();

			$sql = "select * from ".$table;
			$statement = $db->sendQuery($sql);
			$statement->execute();
            $rv = $statement->fetchAll(PDO::FETCH_ASSOC);
			return json_encode($rv);
		}catch(Exception $ex){
			die("Error: " . $ex->getMessage());
		}
    }




	public static function insert($table,$params){
		
        try{
			$db = personaApi::getPDO();

			$sql = "insert into ".$table . "(nombre, mail, password, sexo) values (:1, :2, :3, :4)";
			$statement = $db->sendQuery($sql);
			$statement->bindValue(":1", $params['nombre'], PDO::PARAM_STR);
			$statement->bindValue(":2", $params['mail'], PDO::PARAM_STR);
			$statement->bindValue(":3", $params['password'], PDO::PARAM_STR);
			$statement->bindValue(":4", $params['sexo'], PDO::PARAM_STR);
			$statement->execute();

		}catch(Exception $ex){
			$message = $ex->getMessage();
			die("Error: " . $ex->getMessage());
		}
    }




	public static function update($table,$params){

        try{
			$db = personaApi::getPDO();

			$sql = "update ".$table . " set nombre = :1,  mail = :2, password = :3, sexo = :4 where id=:5"; 
			$statement = $db->sendQuery($sql);
			$statement->bindValue(":1", $params['nombre'], PDO::PARAM_STR);
			$statement->bindValue(":2", $params['mail'], PDO::PARAM_STR);
			$statement->bindValue(":3", $params['password'], PDO::PARAM_STR);
			$statement->bindValue(":4", $params['sexo'], PDO::PARAM_STR);
			$statement->bindValue(":5", $params['id'], PDO::PARAM_STR);
			$statement->execute();

		}catch(Exception $ex){
			$message = $ex->getMessage();
			die("Error: " . $ex->getMessage());
		}
    }


	

	public static function delete($table,$id){

        try{
			$db = personaApi::getPDO();

			$sql = "delete from ".$table . " where id = :id";
			$statement = $db->sendQuery($sql);
			$statement->bindValue(":id", $id, PDO::PARAM_INT);	
			$statement->execute();

		}catch(Exception $ex){
			$message = $ex->getMessage();
			die("Error: " . $ex->getMessage());
		}
    }
}
?>