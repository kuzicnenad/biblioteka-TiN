package rs.ac.singidunum.tf.entities;

import java.sql.Date;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity (name = "knjiga") // This tells Hibernate to make a table out of this class
public class Knjiga {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String isbn;
	private String naslov;
	private String autor;
	private String kategorija;
	private Integer godina_izdanja;
	private String izdavacka_kuca;
	private Integer tiraz;
	
	public Knjiga() {
		
	}
	
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}
	
	public String getIsbn() {
		return isbn;
	}

	public void setIsbn(String isbn) {
		this.isbn = isbn;
	}

	public String getNaslov() {
		return naslov;
	}

	public void setNaslov(String naslov) {
		this.naslov = naslov;
	}

	public String getAutor() {
		return autor;
	}

	public void setAutor(String autor) {
		this.autor = autor;
	}

	public String getKategorija() {
		return kategorija;
	}

	public void setKategorija(String kategorija) {
		this.kategorija = kategorija;
	}

	public Integer getGodina_izdanja() {
		return godina_izdanja;
	}

	public void setGodina_izdanja(Integer godina_izdanja) {
		this.godina_izdanja = godina_izdanja;
	}

	public String getIzdavacka_kuca() {
		return izdavacka_kuca;
	}

	public void setIzdavacka_kuca(String izdavacka_kuca) {
		this.izdavacka_kuca = izdavacka_kuca;
	}

	public Integer getTiraz() {
		return tiraz;
	}

	public void setTiraz(Integer tiraz) {
		this.tiraz = tiraz;
	}

	

}
